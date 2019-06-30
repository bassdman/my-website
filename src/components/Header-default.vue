  <template>
    <!-- Der Default Header -->
    <div class="header gbSiteContent">
      <div class="name">
        <router-link to="/">Manuel Gelsen</router-link>
      </div>
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
</style>