export const state = () => ({
    class: '',
    src: '',
    figCaption: '',
    bgColor: ''
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
    bgcolor(state, color) {
        state.bgColor = color;
    }
}