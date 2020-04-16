<template>
  <div class="cardContainer">
    <div class="header">
      <span class="groupTitle">{{groupTitle()}}</span>
      <span
        class="interesseLabel"
        v-html="interesse('label')"
        v-bind:style="{color:interesse('color','#cccccc')}"
      ></span>
    </div>
    <h1>{{config.title}}</h1>
    <div class="content" v-bind:style="{background:interesse('background','#cccccccc')}">
      <div class="description" v-html="config.description"></div>
    </div>
  </div>
</template>

<script>
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
};
export default {
  name: "card",
  props: {
    config: {
      type: Object
    }
  },
  methods: {
    groupTitle() {
      switch (this.config.group) {
        case "projekt":
          return "Projekt";
        case "assholecard":
          return "(Anti-) Arschlochkarte";
        default:
          return "type '" + this.config.group + "' has no title.";
      }
    },
    interesse(key, _default = "") {
      return interessen[this.config.interesse]
        ? interessen[this.config.interesse][key]
        : _default;
    }
  }
};
</script>


<style scoped>
@font-face {
  font-family: Exo2;
  src: url('~assets/Exo2-Medium.ttf');
}

.cardContainer {
  width: 74mm;
  height: 105mm;
  border: 1px solid black;
  padding: 10px;
}
h1 {
  margin: 5px 0px 15px 0px;
  display: block;
  text-align: center;
  font-weight: normal;
      font-family: Exo2;
  font-size: 20px;
}
.groupTitle {
  color: gray;
  font-size: smaller;
}
.description {
  font-size: normal;
}
.header {
  justify-content: space-between;
  display: flex;
}
.interesseLabel {
  font-weight: bold;
}
.content {
  height: 80mm;
  text-align:center;
  padding: 10px;
}
</style>
