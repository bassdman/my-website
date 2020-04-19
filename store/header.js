export const state = () => ({
    show: true,
    buttonAddCard: false,
    buttonModifyCard: false,
    modifyMode: false,
})
export const mutations = {
    show(state, show) {
        if (state.show != show)
            state.show = show;
    },
    modifyMode(state, modifyMode) {
        if (state.modifyMode != modifyMode)
            state.modifyMode = modifyMode;
    },
    hideAllButtons(state) {
        state.buttonAddCard = false;
        state.buttonModifyCard = false;
    },
    showButtons(state, buttons = []) {
        mutations.hideAllButtons(state);

        if (typeof buttons == 'string')
            buttons = [buttons];

        buttons.forEach(buttonName => {
            const buttonNameCapitalized = buttonName.charAt(0).toUpperCase() + buttonName.slice(1);
            state["button" + buttonNameCapitalized] = true;
        })
    }
}