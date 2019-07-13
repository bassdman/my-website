  <template>
  <!-- Der Default Header -->
  <div class="header gbSiteContent">
    <span class="pagename">{{$route.meta.headerPagename }}</span>
    <nuxt-link to="/" class="nameWithTitle">
      <span class="name">Manuel Gelsen</span>
      <span class="subtitle">Webdesigner, Querdenker und noch vieles mehr</span>
    </nuxt-link>
    <span class="navigation"></span>
  </div>
</template>

<script>
export default {
  name: "headerElem"
};
</script>

<style scoped>
.header {
  padding: 0em 0em 1em 0em;
  display: flex;
}
.nameWithTitle{
  display: inline-flex;
  text-align: center;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  flex: auto;
}
.name {
  font-size: x-large;
  font-weight: bold;
  text-transform: uppercase;
}
.pagename{
  align-self: flex-end;
}
</style>