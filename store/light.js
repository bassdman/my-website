export const state = () => ({
    on: false
})
export const mutations = {
    toggle(state) {
        state.on = !state.on;
    },
    setOn(state, on) {
        if (on == undefined)
            state.on = true;
        else
            state.on = on;
    },
    setOff(state, off) {
        if (off == undefined)
            state.on = false;
        else
            state.on = !off;
    }
}