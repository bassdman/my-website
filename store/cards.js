import { db, auth } from "../plugins/initFirebase";
import Vue from 'vue';
import { computed } from '@vue/composition-api';

import _ from 'lodash';

const interessen = {
    natur: {
        background: "#30ad077d",
        color: "#30ad07",
        label: "Natur"
    },
    geld: {
        background: "#f5f75a7d",
        color: "#ff9900",
        label: "Geld"
    },
    sozial: {
        background: "#f7705a6e",
        color: "#f7705a",
        label: "Sozial"
    },
    notdefined: {
        background: "transparent",
        color: "Black",
        label: "Kein Interesse"
    },
};

const cardTypes = {
    ereignis: {
        label: "Ereignis"
    },
    global: {
        label: "Global"
    },
    assholecard: {
        label: "(Anti-) Arschlochkarte"
    },
    rohstoff: {
        label: "Rohstoff"
    },
    gegenstand: {
        label: "Gegenstand"
    },
    beruf: {
        label: "Beruf"
    },
    initial: {
        label: "Kein Kartentyp definiert"
    }
};

export const state = () => ({
    modifyMode: false,
    cards: {},
})
export const mutations = {
    modifyMode(state, modifyMode) {
        if (state.modifyMode != modifyMode)
            state.modifyMode = modifyMode;
    },
    addNewCard(state) {
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const newCard = {
            cardType: "initial",
            description: "Beschreibung einer neuen Karte",
            interesse: "initial",
            title: "Titel einer neuen Karte",
            _id: id,
            _order: Object.keys(state.cards).length,
            _created: new Date()
        };

        Vue.set(state.cards, id, newCard);
    },
    update(state, card) {
        Vue.set(state.cards, card._id, Object.assign({}, state.cards[card._id], card));
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
                const cards = {};
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    const card = Object.assign({ _id: doc.id }, doc.data());
                    cards[card._id] = card;
                });
                return cards;
            });
    },
    save: _.debounce((context, card) => {
        const doc = getDoc(card);

        return doc.set(card)
            .then(function(docRef) {
                console.log("card saved: ", docRef);
                return docRef;
            })
            .catch(function(error) {

                console.error("Error writing document: ", error);
            });
    }, 1000)
}

export const getters = {
    allCards(state) {
        console.log('allcards')
        const cards = Object.values(state.cards).sort((a, b) => { return b._order - a._order });
        return cards;
    },
    attribute(state, id, propertyname) {
        if (state.cards[id])
            return state.cards[id][propertyname];
        else
            return '';
    },

};

function getDoc(card) {
    if (card._id)
        return db.collection("cards").doc(card._id)
    else
        return db.collection("cards").doc();
}

export { cardTypes, interessen }