<template>
  <div class="all" v-bind:style="{color:textcolor}">
    <h1>Spieleschmiede</h1>
    <div class="containerLogin" v-if="!isLoggedIn">
      <div class="introText">Hier entstehen Ideen, Spiele, werden Sachen ausprobiert,... Manches ist noch nicht für die Allgemeinheit bestimmt, weil noch etwas daran gearbeitet werden soll.
      Deshalb ist es nur für manche Personen sichtbar :D</div>
      <div class="subcontainerLogin">
        <label>
          E-Mail:
          <input type="email" v-model="loginEmail" />
        </label>
        <label>
          Password:
          <input type="password" v-model="loginPassword" />
        </label>
        <button v-on:click="login">Login</button>
        <p class="error">{{errormsg}}</p>
      </div>
    </div>
    <div class="containerCards" v-if="isLoggedIn">
      <div v-for="card in cards" :key="card.title" class="cardContainer">
        <card :config="card" :modify="$store.state.header.modifyMode"></card>
      </div>
    </div>
  </div>
</template>

<script>
import card from "../components/gameoflive/karte";
import { db, auth } from "../plugins/initFirebase";

async function loadCards(context) {
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
      context.cards = cards;
    });
}

export default {
  name: "Spieleschmiede",
  created() {
    this.$store.commit("sidebar/show", false);
    this.$store.commit("background/bgcolor", "#00dcffe0");
    this.$store.commit("header/showButtons",['modifyCard','addCard']);
    const self = this;
    auth.onAuthStateChanged(async function(user) {
      if (user) {
        self.isLoggedIn = true;
        await loadCards(self);
      }
    });
  },
  computed: {
    textcolor() {
      return this.$store.state.light.on ? "black" : "white";
    }
  },
  methods: {
    async login() {
      const self = this;
      try {
        await auth.setPersistence("session");
        await auth.signInWithEmailAndPassword(
          this.loginEmail,
          this.loginPassword
        );
        await loadCards(self);
        this.isLoggedIn = true;
      } catch (error) {
        var errorCode = error.code;
        self.errormsg =
          "Login failed: " + error.message + " (" + error.code + ")";
      }
    }
  },
  components: {
    card
  },
  head() {
    return {
      // Children can override the title.
      title: "Spieleschmiede",
      // Result: My Page Title ← My Site
      // If a child changes the title to "My Other Page Title",
      // it will become: My Other Page Title ← My Site
      titleTemplate: "Manuel Gelsen | %s",
      // Define meta tags here.
      meta: [
        { name: "language", content: "de" },
        {
          name: "description",
          content: "Hier werden Spiele entwickelt, geschmiedet und entworfen. Für streng geheime Spiele muss man sich anmelden :)"
        },
        { name: "robots", content: "index,follow" }
      ],
      link: [
        { rel: "canonical", href: "https://www.manuelgelsen.de/impressum" },
        { rel: "manifest", href: "/manifest.json" }
      ]
    };
  },
  data() {
    return {
      isLoggedIn: false,
      loginEmail: "",
      loginPassword: "",
      errormsg: "",
      cards: []
    };
  }
};
</script>

<style scoped>
.containerCards {
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  min-height: 500px;
  justify-content: center;
}
.cardContainer {
  margin: 7px;
}
h1 {
  text-align: center;
}
.containerLogin {
  display: flex;
  justify-content: center;
  min-height: 500px;
  flex-wrap: wrap;
}
.subcontainerLogin {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 500px;
  height: 121px;
}

.subcontainerLogin input {
  height: 30px;
  width: 200px;
}
.subcontainerLogin input {
  flex: 1 100%;
}
label {
  display: flex;
  flex-direction: column;
  height: 60px;
}

button {
  width: 206px;
  height: 30px;
  border: 1px solid gray;
  margin-top: 30px;
  font-size: 16px;
  flex: 1 100%;
  cursor: pointer;
}
.error {
  color: red;
}
.introText{
  flex: 1 100%;
}
</style>