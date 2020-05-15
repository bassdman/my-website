import $ from './ownquery.js';
//import StateMachine from './Statemachine.js';

export default function StateMachine(_state = {}) {
    const computed = {};
    const watched = {};
    const bindings = {};
    const dependencies = {

    };

    function randomId(prefix) {
        return prefix + Math.random().toString(36).substring(2, 15);
    }

    const state = new Proxy(_state, {
        set(target, property, value) {
            target[property] = value;
            render(target, property, value);

            for (let dependency of dependencies[property]) {
                render(target, dependency, state[dependency]);
            }

            return true;
        },
        get(obj, prop) {
            const value = obj[prop];
            return value;
        }
    });

    function compute(text, state, inline = false) {
        const _values = values('parsable');
        const paramValues = Object.keys(_values).map(key => _values[key]);

        const fn = toFn(text);
        const result = fn(...paramValues); //wirft einen Fehler, wenn invalide
        return result;
        /*   let code = `'use strict';`;
           const isObject = text && text.trim().startsWith('{');

           const anfuehrungszeichen = inline && !isObject ? '`' : '';

           const _values = values('parsable');
           Object.keys(_values).forEach(key => {
               let valueText = _values[key];
               code += `var ${key} = ${valueText};`;
           });

           code += 'return ' + anfuehrungszeichen + text + anfuehrungszeichen + ';';

           try {
               const codeFinal = code + 'return ' + text + ';';
               return Function(codeFinal)();
           } catch (e) {
               try {
                   const codeFinal = code + 'return `' + text + '`;';
                   return Function(codeFinal)();
               } catch (e) {
                   console.log('code can not be parsed', code)
               }

           }*/
    }

    function toFn(text) {

        const _values = values('parsable');


        const paramKeys = Object.keys(_values);
        try {
            const codeNonString = 'return ' + text + ';';
            const fn = Function(...paramKeys, codeNonString);
            return fn;
        } catch (e) {
            try {
                const codeString = 'return `' + text + '`;';
                const fn = Function(...paramKeys, codeString);
                return fn;
            } catch (e) {
                console.log('code can not be parsed', codeNonString)
            }

        }
    }

    function addDependencies(fn, name, elemid, elemkey, keyprefix = "") {
        const fnText = fn.toString();
        Object.keys(state).forEach(key => {
            if (!fnText.match(new RegExp("\\b" + keyprefix + key + "\\b")))
                return;

            if (!dependencies[key]) {
                dependencies[key] = [];
            }

            if (key !== name) {
                const matchid = elemid ? elemid + '_' + elemkey : name;
                dependencies[key].push(matchid);
                bindings[matchid] = {
                    elemid,
                    name,
                    fn: toFn(fn)
                }
            }
        });
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

        const elemId = elem.dataset.id || randomId('id_')

        Object.keys(elem.dataset).forEach(key => {
            const id = randomId('rnd');
            const fnToCompute = elem.dataset[key];

            computed[id] = toFn(fnToCompute);
            addDependencies(fnToCompute, id, elemId, key);

            elem.dataset.id = elemId;
        })
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
            const result = compute(classes, state);

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
            const result = compute(styleInline, state);

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
                const styleValue = compute(valueRaw, state);

                elem.style[styleName] = styleValue;
            }
        });
    };

    Object.keys(state).forEach(key => {
        if (typeof state[key] == 'function') {
            computed[key] = state[key];
            addDependencies(state[key], key);
        }

        render(state, key, state[key])
    });
    return {
        state,
        values: values(),
        watch,
        computed,
        dependencies,
        bindings
    }
};