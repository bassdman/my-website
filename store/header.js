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
    opacity(state, opacity) {
        state.opacity = opacity;
    },
    setTop(state, top) {
        state.top = top;
    },
    show(state, show) {
        state.show = show;
    }
}