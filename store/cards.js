import { db, auth } from "../plugins/initFirebase";
import Vue from 'vue';
import { computed } from '@vue/composition-api';

import _ from 'lodash';

function addKeysToObj(obj) {
    Object.keys(obj).forEach(key => obj[key].key = key);
    return obj;
}
const interessen = addKeysToObj({
    natur: {
        background: "#30ad077d",
        color: "#30ad07",
        label: "Natur",
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
        label: "Kein Interesse",
        disabled: 'disabled'
    },
});

const cardTypes = addKeysToObj({
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
        label: "Kein Kartentyp definiert",
        disabled: 'disabled'
    }
});

export const state = () => ({
    modifyMode: false,
    cards: {},
})
export const mutations = {
    modifyMode(state, modifyMode) {
        if (state.modifyMode != modifyMode)
            state.modifyMode = modifyMode;
    },
    addNewCard(state, newCard) {


        Vue.set(state.cards, newCard._id, newCard);
    },
    update(state, card) {
        Vue.set(state.cards, card._id, Object.assign({}, state.cards[card._id], card));
    },
    setCards(state, cards) {
        state.cards = cards;
    }
}

export const actions = {
    createCard: (context, card) => {
        const newCard = {
            cardType: "initial",
            description: "Beschreibung einer neuen Karte",
            interesse: "initial",
            title: "Titel einer neuen Karte",
            _order: Object.keys(context.state.cards).length,
            _created: new Date()
        };
        return db.collection("cards").add(newCard).then(doc => {
                newCard._id = doc.id;
                console.log(context)
                return newCard;
            })
            .catch(err => {
                console.log(err);
            });
    },
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
        return db.collection("cards").doc(card._id).update(card)
            .then(function(docRef) {
                console.log("card saved: ", JSON.stringify(card));
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

async function getDoc(card) {
    if (card._id.startsWith('temp_')) {
        const docRef = await db.collection("cards").add(card)
        card._id = docRef.id;
    }
    return db.collection("cards").doc(card._id)
}

export { cardTypes, interessen }