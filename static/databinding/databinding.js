function $(queryOrElem) {
    function init(queryOrElem) {
        if (typeof queryOrElem == 'string') {
            const found = document.querySelectorAll(queryOrElem);
            if (found.length) return found;

            return [document.createElement('div')]
        }

        if (queryOrElem._own$)
            return queryOrElem.raw;

        if (!queryOrElem.length)
            return [queryOrElem]

        return queryOrElem;
    }

    const elems = init(queryOrElem);

    const returnValue = new Proxy({
        _own$: true,
        raw: elems,
        elems,
        removeAttribute(key) {
            for (let elem of elems) {
                elem.removeAttribute(key);
            }
        },
        show(value = true) {
            for (let elem of elems) {
                elem.style.display = value ? 'block' : 'none!important;';
            }
        },
        hide() {
            for (let elem of elems) {
                elem.style.display = 'none!important;';
            }
        },
        checked(val) {
            if (val == null)
                return elems[0].checked;

            for (let elem of elems) {
                if (typeof val == 'string' && elem.value == val)
                    elem.checked = true;
                else if (typeof val == 'string' && elem.value != val)
                    elem.checked = false;
                else
                    elem.checked = val;
            }
        },
        setAttribute(key, value) {
            for (let elem of elems) {
                elem.setAttribute(key, value);
            }
        },
        addEventListener(events, fn) {
            const _events = events.split(' ');

            for (event of _events) {
                for (let elem of elems) {
                    elem.addEventListener(event, () => {
                        fn($(elem));
                    });
                }
            }
        }
    }, {
        get(target, key) {
            if (target[key])
                return target[key];

            if (!target.elems.length)
                return;

            const value = target.elems[0][key];

            if (typeof value == 'function') {
                return target[key];
            }
            return target.elems[0][key];
        },
        set(target, key, value) {
            if (!target.elems.length)
                return true;

            for (let elem of target.elems) {
                elem[key] = value;
            }
            return true;
        }

    });
    return returnValue;

}

function StateMachine(_state = {}) {
    const computed = {};
    const watched = {};

    const state = new Proxy(_state, {
        set(target, property, value) {
            target[property] = value;
            render(target, property, value);

            Object.keys(state).forEach(key => {
                if (typeof state[key] == 'function') {
                    render(target, key, state[key]);
                }
            });
            return true;
        },
        get(obj, prop) {
            const value = obj[prop];
            return value;
        }
    });

    function compute(text, state, inline = false) {
        let code = `'use strict';`;
        const isObject = text && text.trim().startsWith('{');

        const anfuehrungszeichen = inline && !isObject ? '`' : '';

        const _values = values('parsable');
        Object.keys(_values).forEach(key => {
            let valueText = _values[key];
            code += `var ${key} = ${valueText};`;
        });

        code += 'return ' + anfuehrungszeichen + text + anfuehrungszeichen + ';';

        return Function(code)();
    }

    function values(parsable) {
        const retObj = {};

        Object.keys(state).forEach(key => {
            let value = state[key];
            let valueText = value;

            if (typeof value == 'function') {
                value = value(state);
                valueText = value;
            }

            if (value == null)
                valueText = "''";

            if (typeof value == 'string' && parsable)
                valueText = `'${value}'`;

            if (typeof value == 'object' && parsable)
                valueText = JSON.stringify(value);

            retObj[key] = valueText;
        });

        return retObj;
    }

    function watch(key, fn) {
        if (!watched[key])
            watched[key] = fn;
    }

    $('[data-model]:not([type="checkbox"])').addEventListener('keyup', function(elem) {
        const name = elem.dataset.model;
        state[name] = elem.value;
    });
    $('[data-model]:not([type="checkbox"])').addEventListener('change', function(elem) {
        const name = elem.dataset.model;
        state[name] = elem.value;
    });
    $('input[data-model][type="checkbox"]').addEventListener('change', function(elem) {
        const name = elem.dataset.model;
        state[name] = elem.checked();
    });
    $('*').elems.forEach(elem => {
        const hasClassKey = Object.keys(elem.dataset).filter(key => key.startsWith('class.')).length > 0;
        const hasStyleKey = Object.keys(elem.dataset).filter(key => key.startsWith('style.')).length > 0;

        if (hasClassKey) {
            elem.setAttribute('_datacls', "");
        }
        if (hasStyleKey) {
            elem.setAttribute('_datastyle', "");
        }
    })

    const render = (state, prop, value) => {
        console.log('render', prop, value);
        const val = typeof value == 'function' ? value(state) : value;


        $(`[data-bind="${prop}"]`).innerHTML = val;
        $(`[data-model="${prop}"]:not([type="radio"])`).value = val;
        $(`input[data-model="${prop}"][type="radio"][value="${val}"]`).setAttribute('checked', 'checked');

        if (val)
            $(`input[data-model="${prop}"][type="checkbox"]`).setAttribute('checked', 'checked');
        else
            $(`input[data-model="${prop}"][type="checkbox"]`).removeAttribute('checked');

        $(`[data-show]`).elems.forEach(elem => {
            const showCondition = elem.dataset.show;
            const result = compute(showCondition, state);

            elem.style.display = result ? 'block' : 'none';
        })
        $(`[data-class]`).elems.forEach(elem => {
            const classes = elem.dataset.class;
            const result = compute(classes, state, 'inline');

            if (typeof result == 'object') {
                Object.keys(result).forEach(key => {
                    const hasClass = result[key];
                    if (hasClass)
                        elem.classList.add(key);
                    else
                        elem.classList.remove(key);
                })
            } else {
                elem.setAttribute('class', result)
            }
        });
        $(`[data-style]`).elems.forEach(elem => {
            const styleInline = elem.dataset.style;
            const result = compute(styleInline, state, 'inline');

            if (typeof result == 'object') {
                Object.keys(result).forEach(key => {
                    elem.style[key] = result[key];
                })
            } else {
                elem.setAttribute('style', result)
            }
        });
        $(`[_datacls]`).elems.forEach(elem => {
            const dataclasses = Object.keys(elem.dataset).filter(key => key.startsWith('class.'));

            for (let cls of dataclasses) {
                const valueRaw = elem.dataset[cls];
                const className = cls.replace('class.', '');
                const result = compute(valueRaw, state);

                if (result)
                    elem.classList.add(className)
                else
                    elem.classList.remove(className);
            }
        });
        $(`[_datastyle]`).elems.forEach(elem => {
            const datastyle = Object.keys(elem.dataset).filter(key => key.startsWith('style.'));

            for (let style of datastyle) {
                const valueRaw = elem.dataset[style];
                const styleName = style.replace('style.', '');
                const styleValue = compute(valueRaw, state, 'inline');

                elem.style[styleName] = styleValue;
            }
        });
    };

    Object.keys(state).forEach(key => {
        render(state, key, state[key])
    });
    return {
        state,
        values: values(),
        watch
    }
};