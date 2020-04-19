export const state = () => ({
    show: true
})
export const mutations = {
    show(state, show) {
        if (state.show != show)
            state.show = show;
    }
}