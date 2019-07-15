  <template>
  <!-- Der Default Header -->
  <div class="header" v-bind:style="{'background-color':'rgba(0,0,0,'+$store.state.header.opacity+')'}" v-bind:class="{'displayNone': $store.state.header.show == false}">
    <span class="pagename">{{$store.state.header.pagename}}</span>
    <nuxt-link to="/" class="nameWithTitle">
      <span class="name">Manuel Gelsen</span>
      <span class="subtitle">Webdesigner, Querdenker und noch vieles mehr</span>
    </nuxt-link>
    <span class="navigation"></span>
  </div>
</template>

<script>
export default {
  name: "headerElem",
  data() {
    return {
      headerOpacity: 0.8,
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  position: sticky; 
  top: 0px;
  padding-bottom: 1em;
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
.pagename{
  align-self: center;
  color: white;
  flex: 1;
}
.displayNone{
  display: none;
}
</style>