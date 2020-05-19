import $ from './ownquery.js';
import StateMachine from './Statemachine.js';




StateMachine.register(function onRenderInputElementCheckboxes() {
    return {
        bindTo: 'input[data-model][type="checkbox"]',
        computations: elem => elem.dataset.model,
        onRender(elem, result, { property, value }) {
            if (value)
                elem.setAttribute('checked', 'checked');
            else
                elem.removeAttribute('checked');
        },
    }
});

StateMachine.register(function onRenderInputElementDefault() {
    return {
        bindTo: '[data-model]:not([type="radio"])',
        computations: elem => elem.dataset.model,
        onRender(elem, result, { property, value }) {
            elem.value = value;
        },
    }
});

StateMachine.register(function onRenderInputElementRadios() {
    return {
        bindTo: 'input[data-model][type="radio"]',
        computations: elem => elem.dataset.model,
        onRender(elem, result, { property, value }) {
            if (elem.value == value)
                elem.setAttribute('checked', 'checked');
        },
    }
});

StateMachine.register(function onRenderDataBind() {
    return {
        bindTo: '[data-bind]',
        computations: elem => elem.dataset.bind,
        onRender(elem, result, state) {
            elem.innerHTML = result;
        },
    }
});

StateMachine.register(function onRenderDataClass() {
    return {
        computations: elem => elem.dataset.class,
        bindTo: '[data-class]',
        onRender(elem, result, state) {
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
        },
    }
});

StateMachine.register(function onRenderDataStyle() {
    return {
        bindTo: '[data-style]',
        computations: elem => elem.dataset.style,
        onRender(elem, result, state) {
            if (typeof result == 'object') {
                Object.keys(result).forEach(key => {
                    elem.style[key] = result[key];
                })
            } else {
                elem.setAttribute('style', result)
            }
        }
    }
});

StateMachine.register(function onRenderStyleXyz() {
    return {
        bindTo: () => {
            return Array.from(document.querySelectorAll('*')).filter(elem => {
                const hasStyleKey = Object.keys(elem.dataset).filter(key => key.startsWith('style.')).length > 0;
                return hasStyleKey;
            });
        },
        computations: elem => {
            const computations = Object.keys(elem.dataset).filter(key => key.startsWith('style.')).map(key => elem.dataset[key]);
            console.log(computations);
            return computations;
        },
        onRender(elem, result, { property }) {
            elem.style[property] = result;
        },
    }
});

StateMachine.register(function onRenderClassXyz() {
    const boundElements = Array.from(document.querySelectorAll('*')).filter(elem => {
        const hasClassKey = Object.keys(elem.dataset).filter(key => key.startsWith('class.')).length > 0;
        return hasClassKey;
    });

    return {
        bindTo: boundElements,
        computations: elem => {
            const computations = Object.keys(elem.dataset).filter(key => key.startsWith('class.')).map(key => {
                return {
                    computation: elem.dataset[key],
                    classname: key.replace('class.', '')
                }
            });
            console.log(computations);
            return computations;
        },
        onRender(elem, result, { property, value, computation }) {
            if (result)
                elem.classList.add(computation.classname)
            else
                elem.classList.remove(computation.classname);
        },
    }
});

/*StateMachine.register(function onRenderClassXyz({ compute }) {
    return {
        onElementInit(elem) {
            const hasClassKey = Object.keys(elem.dataset).filter(key => key.startsWith('class.')).length > 0;
            if (hasClassKey) {
                elem.setAttribute('_datacls', "");
            }
        },
        onRenderAlt(state, prop, value) {
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
*/
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

/*StateMachine.register(function onRenderDataShow({ compute }) {
    return {
        onRenderAlt(state, prop, value) {
            $(`[data-show]`).elems.forEach(elem => {
                const showCondition = elem.dataset.show;
                const result = compute(showCondition, state);

                elem.style.display = result ? 'block' : 'none';
            })
        }
    }
});*/

/* Ende Der Bereich wird ausgelagert
 */
export default StateMachine;