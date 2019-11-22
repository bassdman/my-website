<template>
  <div class="sign_total" v-bind:style="{width:(width || 200) + 'px'}">
    <div class="text" v-bind:style="signclasses">
      <nuxt-link class="colorWhite" v-if="link" v-bind:to="link">
        <slot></slot>
      </nuxt-link>
      <span v-if="!link">
        <slot></slot>
      </span>
    </div>
    <div v-for="board in _boards" :key="board" v-bind:style="{width: board}">
      <div class="brett">&nbsp;</div>
    </div>
    <div class="stab"></div>
  </div>
</template>

<script>
export default {
  name: "sign",
  props: {
    text: String,
    height: [Number, String],
    width: [Number, String],
    link: String,
    boards: { default: 4, type: [Number, String] }
  },
  created() {
    var boards = [];
    for (let i = 0; i < this.boards; i++) {
      boards.push(75 + Math.random() * 25 + "%");
    }
    this._boards = boards;
  },
  computed: {
    signclasses() {
      console.log("signclasses");
      return {
        height: (this.$props.height || 100) + "px",
        width: (this.$props.width || 200) + "px"
      };
    }
  }
};
</script>

<style>
.stab,
.brett {
  background: #ca8e0c;
  background-image: url("~assets/woodtexture.png");
  background-repeat: repeat-x, repeat;
  height: 25%;
}
.text {
  position: absolute;
  text-decoration: none;
  font-style: italic;
  font-size: 20px;
  font-family: fantasy;
  margin-top: 10px;
}
.stab {
  width: 10px;
  align-self: center;
  height: 50px;
}
.sign_total {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>