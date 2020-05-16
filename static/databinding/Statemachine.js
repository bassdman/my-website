const globalCache = {
    onInit: [],
    onElementInit: [],
    onRender: []
}

function StateMachine(_state = {}) {
    const watched = {};

    const cache = {
        computed: {},
        bindings: {},
        dependencies: {}
    };

    function randomId(prefix) {
        return prefix + Math.random().toString(36).substring(2, 15);
    }

    const state = new Proxy(_state, {
        set(target, property, value) {
            target[property] = value;
            render(target, property, value);

            for (let dependency of cache.dependencies[property]) {
                render(target, dependency, state[dependency]);
            }

            return true;
        },
        get(obj, prop) {
            const value = obj[prop];
            return value;
        }
    });

    function compute(text) {
        const _values = values();
        const paramValues = Object.keys(_values).map(key => _values[key]);

        const fn = toFn(text);
        const result = fn(...paramValues); //wirft einen Fehler, wenn invalide
        return result;
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

            if (!cache.dependencies[key]) {
                cache.dependencies[key] = [];
            }

            if (key !== name) {
                const matchid = elemid ? elemid + '_' + elemkey : name;
                cache.dependencies[key].push(matchid);
                cache.bindings[matchid] = {
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

    for (let initFn of globalCache.onInit) {
        const result = initFn({ state, compute }) || {};

        if (result.onElementInit)
            globalCache.onElementInit.push(result.onElementInit);
        if (result.onRender)
            globalCache.onRender.push(result.onRender);
    }

    document.querySelectorAll('*').forEach(elem => {
        for (let onElementInitFn of globalCache.onElementInit) {
            onElementInitFn(elem);
        }

        const elemId = elem.dataset.id || randomId('id_')

        Object.keys(elem.dataset).forEach(key => {
            const id = randomId('rnd');
            const fnToCompute = elem.dataset[key];

            cache.computed[id] = toFn(fnToCompute);
            addDependencies(fnToCompute, id, elemId, key);

            elem.dataset.id = elemId;
        })


    });

    const render = (state, prop, value) => {
        console.log('render', prop, value);

        const toUpdate = cache.dependencies[prop];
        for (let updateEntry of toUpdate) {
            const cacheUpdateEntry = cache.bindings[updateEntry];
            console.log(cacheUpdateEntry);
        }

        for (let onRenderFn of globalCache.onRender) {
            onRenderFn(state, prop, value);
        }

    };

    Object.keys(state).forEach(key => {
        if (typeof state[key] == 'function') {
            cache.computed[key] = state[key];
            addDependencies(state[key], key);
        }

        render(state, key, state[key])
    });

    return {
        state,
        values: values(),
        watch,
        cache
    }
};


function register(fn) {
    if (fn)
        globalCache.onInit.push(fn);
}

StateMachine.register = register;

export default StateMachine;