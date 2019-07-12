  <template>
    <div class="header gbSiteContent" v-bind:class="{ headerDark: contentPositionTop < 75, displayNone: contentPositionTop >= 75}">
      <div class="name">
        <nuxt-link to="/">Manuel Gelsen</nuxt-link>
      </div>
      <div class="subtitle">Webdesigner, Querdenker und noch vieles mehr</div>
    </div>
</template>

<script>

//import { dataBus } from '../main';

export default {
  name: "headerElem",
  data() {
    return {
      contentPositionTop: 1000
    }
  },
 created() {
  // Using the server bus
 /* dataBus.$emit("trigger:contentPositionTop");
  dataBus.$on('update:contentPositionTop', (contentPositionTop) => {
   this.contentPositionTop = contentPositionTop;
  });*/
 },
};
</script>

<style scoped>
.header {
  position: fixed;
  color: white;
  top: 1em;
  z-index: 2;
  width: 100%;
}
.name {
  font-size: x-large;
  font-weight: bold;
  text-transform: uppercase;
}

.name a {
  text-decoration: none;
  color: inherit;
}

.headerDark{
  color: black;
  display:block;
  }

.displayNone{
  display:none;
}
</style>