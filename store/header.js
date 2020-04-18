export const state = () => ({
    show: true,
    buttonAddCard: true
})
export const mutations = {
    show(state, show) {
        if (state.show != show)
            state.show = show;
    },
    showButtons(buttons = []) {
        this.buttonAddCard = false;

        buttons.forEach(button => {
            this.state[button] = true;
        })
    }
}