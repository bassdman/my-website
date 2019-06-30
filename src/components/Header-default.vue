  <template>
  <!-- Der Default Header -->
  <div class="header gbSiteContent">
    <div class="name">
      <router-link to="/">Manuel Gelsen</router-link>
    </div>
    <div class="pagename">{{$route.meta.headerPagename }}</div>
    <div class="navigation"></div>
    <div class="subtitle">Webdesigner, Querdenker und noch vieles mehr</div>
  </div>
</template>

<script>
export default {
  name: "headerElem"
};
</script>

<style scoped>
.header {
  padding: 1em 0em 1em 0em;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto;
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

.pagename {
    align-self: end;
    grid-row: 1 / span 2;
    grid-column: 2 / 3;
    text-align: center;
    font-size: x-large;
    font-weight: bold;
}
</style>