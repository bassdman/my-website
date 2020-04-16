export const state = () => ({
    show: true
})
export const mutations = {
    show(state, show) {
        console.log('state', state)
        if (state.show != show)
            state.show = show;
    }
}