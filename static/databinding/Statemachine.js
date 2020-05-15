export default function StateMachine(_state = {}, renderFn = function noop() {}) {
    const computed = {};
    const watched = {};
    const dependencies = {

    };

    const state = new Proxy(_state, {
        set(target, property, value) {
            target[property] = value;
            renderFn(target, property, value);

            for (let dependency of dependencies[property]) {
                renderFn(target, dependency, state[dependency]);
            }

            return true;
        },
        get(obj, prop) {
            const value = obj[prop];
            return value;
        }
    });

    function addDependencies(fn, name, keyprefix = "") {
        const fnText = fn.toString();
        Object.keys(state).forEach(key => {
            if (!fnText.match(new RegExp("\\b" + keyprefix + key + "\\b")))
                return;

            if (!dependencies[key]) {
                dependencies[key] = [];
            }

            if (key !== name)
                dependencies[key].push(name);
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
        dependencies
    }
};