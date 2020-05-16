import $ from './ownquery.js';
import StateMachine from './Statemachine.js';




/*
    Der Bereich wird ausgelagert
*/

StateMachine.register(function onRenderInputElements({ compute }) {
    return {
        onRender(state, prop, value) {
            const val = typeof value == 'function' ? value(state) : value;

            $(`[data-model="${prop}"]:not([type="radio"])`).value = val;
            $(`input[data-model="${prop}"][type="radio"][value="${val}"]`).setAttribute('checked', 'checked');

            if (val)
                $(`input[data-model="${prop}"][type="checkbox"]`).setAttribute('checked', 'checked');
            else
                $(`input[data-model="${prop}"][type="checkbox"]`).removeAttribute('checked');

        }
    }
});

StateMachine.register(function onRenderDataBind({ compute }) {
    return {
        onRender(state, prop, value) {
            const val = typeof value == 'function' ? value(state) : value;

            $(`[data-bind="${prop}"]`).innerHTML = val;
        }
    }
});

StateMachine.register(function onRenderDataClass({ compute }) {
    return {
        onRender(state, prop, value) {
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
        }
    }
});

StateMachine.register(function onRenderDataStyle({ compute }) {
    return {
        onRender(state, prop, value) {
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
        }
    }
});

StateMachine.register(function onRenderStyleXyz({ compute }) {
    return {
        onElementInit(elem) {
            const hasStyleKey = Object.keys(elem.dataset).filter(key => key.startsWith('style.')).length > 0;
            if (hasStyleKey) {
                elem.setAttribute('_datastyle', "");
            }
        },
        onRender(state, prop, value) {
            $(`[_datastyle]`).elems.forEach(elem => {
                const datastyle = Object.keys(elem.dataset).filter(key => key.startsWith('style.'));

                for (let style of datastyle) {
                    const valueRaw = elem.dataset[style];
                    const styleName = style.replace('style.', '');
                    const styleValue = compute(valueRaw, state);

                    elem.style[styleName] = styleValue;
                }
            });
        }
    }
});

StateMachine.register(function onRenderClassXyz({ compute }) {
    return {
        onElementInit(elem) {
            const hasClassKey = Object.keys(elem.dataset).filter(key => key.startsWith('class.')).length > 0;
            if (hasClassKey) {
                elem.setAttribute('_datacls', "");
            }
        },
        onRender(state, prop, value) {
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
        }
    }
});

StateMachine.register(function addDataModelEvents({ state }) {
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
});

StateMachine.register(function onRenderDataShow({ compute }) {
    return {
        onRender(state, prop, value) {
            $(`[data-show]`).elems.forEach(elem => {
                const showCondition = elem.dataset.show;
                const result = compute(showCondition, state);

                elem.style.display = result ? 'block' : 'none';
            })
        }
    }
});

/* Ende Der Bereich wird ausgelagert
 */
export default StateMachine;