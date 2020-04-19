import { db, auth } from "../plugins/initFirebase";

export const state = () => ({
    modifyMode: false,
    cards: [],
})
export const mutations = {
    modifyMode(state, modifyMode) {
        if (state.modifyMode != modifyMode)
            state.modifyMode = modifyMode;
    },
    addNewCard(state) {
        state.addNewCard = true;
    },
    update(state, card) {
        state.cards = state.cards.map(_card => {
            if (_card._id == card._id)
                return card;
            else
                return _card;
        });
        console.log('updateCard');
        console.log(state.cards)
    },
    setCards(state, cards) {
        console.log(cards)
        state.cards = cards;
    }
}

export const actions = {
    load(context) {
        return db
            .collection("cards")
            .get()
            .then(querySnapshot => {
                const cards = [];
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    const card = Object.assign({ _id: doc.id }, doc.data());
                    cards.push(card);
                });
                //    context.commit('setCards', cards);
                return cards;
            });
    },
    save(context, card) {
        const doc = db.collection("cards").doc(card._id);
        const cardData = card;
        delete cardData._id;

        return doc
            .update(cardData)
            .then(function() {
                console.log("card saved: ", card);
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
    }
}

export const getters = {
    cards(state) {
        return state.cards;
    }
}