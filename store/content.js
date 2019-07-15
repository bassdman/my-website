export const state = () => ({
    top: 0,
    flicker: false
})
export const mutations = {
    flicker(state, flicker) {
        state.flicker = flicker;
    }
}