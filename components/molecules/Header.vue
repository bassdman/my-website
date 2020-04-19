  <template>
  <!-- Der Default Header -->
  <div class="header" v-bind:class="{'displayNone': !$store.state.header.show || false}">
    <div class="menu"></div>
    <nuxt-link to="/" class="nameWithTitle">
      <span class="name">Manuel Gelsen</span>
      <span class="subtitle">Webdesigner, Träumer und vieles mehr</span>
    </nuxt-link>
    <div class="menu">
      <label v-show="$store.state.header.buttonAddCard==true" class="button" v-on:click="addNewCard">
        <button class="card buttonImage">+</button>
        <div class="buttonLabel">Neue Karte</div>
      </label>
      <label
        v-show="$store.state.header.buttonModifyCard"
        class="button"
        v-on:click="toggleModifyMode"
      >
        <button class="card buttonImage" :class="{'modifyMode':modifyMode}">
          <img src="~assets/bearbeiten.svg" />
        </button>
        <div class="buttonLabel" v-on:click="toggleModifyMode" :class="{'modifyModeColor':modifyMode}">
          Karten
          <br />bearbeiten
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerElem",
  data() {
    return {
      modifyMode: false
    };
  },
  methods: {
    addNewCard(){
      this.$store.commit("cards/addNewCard");
    },
    toggleModifyMode() {
      this.modifyMode = !this.modifyMode;
      this.$store.commit("cards/modifyMode", this.modifyMode);
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  position: sticky;
  height: 90px;
  justify-content: space-between;
  top: 0px;
  background: rgba(0, 0, 0, 0.7);
}
.navigation {
  flex: 1;
}
.nameWithTitle {
  display: inline-flex;
  text-align: center;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  flex: auto;
}
.subtitle {
  color: white;
  text-align: center;
  font-size: 20px;
}

.name {
  font-size: 48px;
  font-weight: bold;
  color: white;
}
.menu {
  color: white;
  display: flex;
  align-items: top;
  width: 200px;
}
.displayNone {
  display: none;
}
.button {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttonLabel {
  font-size: 12px;
  text-align: center;
  height: 30px;
  display: inline-flex;
  align-items: center;
}
.card {
  width: 30px;
  height: 42px;
  font-size: larger;
  border:none;
  border-radius: 3px;
}
.button {
  margin: 10px 10px;
}
.button:hover .buttonImage {
  background: goldenrod;
  cursor: pointer;
}

.button:hover .buttonLabel {
  color: goldenrod;
  cursor: pointer;
}

.modifyMode {
  background: goldenrod;
}
.modifyModeColor {
  color: goldenrod;
}
</style>