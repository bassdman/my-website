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
        state.cards.unshift({
            cardType: "initial",
            description: "Beschreibung einer neuen Karte",
            interesse: "initial",
            title: "Titel einer neuen Karte",
            _id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        })
    },
    update(state, card) {
        state.cards = state.cards.map(_card => {
            if (_card._id == card._id)
                return Object.assign({}, _card, card);
            else
                return _card;
        });
        console.log(state.cards, card)
    },
    setCards(state, cards) {
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
                return cards;
            });
    },
    save(context, card) {
        const doc = getDoc(card);

        return doc.set(card)
            .then(function(docRef) {
                console.log("card saved: ", docRef);
                return docRef;
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
    }
}

function getDoc(card) {
    if (card._id)
        return db.collection("cards").doc(card._id)
    else
        return db.collection("cards").doc();
}