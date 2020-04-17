export const state = () => ({
    class: '',
    bgcolor: ''
})
export const mutations = {
    class(state, cls) {
        state.class = cls;
    },
    bgcolor(state, color) {
        state.bgcolor = color;
    }
}