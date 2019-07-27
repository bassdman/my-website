export const state = () => ({
    pagename: '',
    opacity: 0.8,
    top: 0,
    show: true
})
export const mutations = {
    pagename(state, pagename) {
        state.pagename = pagename;
    },
    show(state, show) {
        if (state.show != show)
            state.show = show;
    }
}