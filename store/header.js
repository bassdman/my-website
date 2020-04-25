export const state = () => ({
    show: true,
    buttonAddCard: false,
    buttonModifyCard: false,
})
export const mutations = {
    show(state, show) {
        console.log("header/show" + show)
        if (state.show != show)
            state.show = show;
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