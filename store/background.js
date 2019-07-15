export const state = () => ({
    class: '',
    src: '',
    figCaption: ''
})
export const mutations = {
    class(state, cls) {
        state.class = cls;
    },
    setSrc(state, src) {
        state.src = src;
    },
    figcaption(state, figCaption) {
        state.figCaption = figCaption;
    },
}