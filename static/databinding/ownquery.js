export default function $(queryOrElem) {
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