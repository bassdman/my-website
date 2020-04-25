export const state = () => ({
    marginTop: '0px'
})
export const mutations = {
    marginTop(state, marginTop = '0px') {
        state.marginTop = marginTop;
    }
}