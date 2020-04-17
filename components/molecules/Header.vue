  <template>
  <!-- Der Default Header -->
  <div class="header" v-bind:class="{'displayNone': !$store.state.header.show || false}">
    <nuxt-link to="/" class="nameWithTitle">
      <span class="name">Manuel Gelsen</span>
      <span class="subtitle">Webdesigner, Träumer und vieles mehr</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "headerElem",
};
</script>

<style scoped>
.header {
  display: flex;
  position: sticky; 
  justify-content:center;
  top: 0px;
  padding-bottom: 1em;
  background: rgba(0,0,0,.7);
}
.navigation{
  flex: 1;
}
.nameWithTitle{
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
.displayNone{
  display: none;
}
</style>