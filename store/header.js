export const state = () => ({
    pagename: ''
})
export const mutations = {
    setPagename(state, pagename) {
        state.pagename = pagename;
    }
}