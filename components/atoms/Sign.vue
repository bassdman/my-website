<template>
  <div class="sign_total" v-bind:style="{width:width + 'px'}">
    <div class="kette kette_links" v-if="kettenlaenge > 0">
      <div
        class="ring"
        v-for="(ring,i) in rings"
        :key="ring"
        :index="i"
        v-bind:style="{'margin-top': -i * 15 + 'px', background: i == 0 || i == rings - 1 ? '#777777' : 'inherit'  }"
      >&nbsp;</div>
    </div>
    <div
      class="kette kette_rechts"
      v-if="kettenlaenge > 0"
      v-bind:style="{'margin-left':(width-100)+'px'}"
    >
      <div
        class="ring"
        v-for="(ring,i) in rings"
        :key="ring"
        :index="i"
        v-bind:style="{'margin-top': -i * 15 + 'px', background: i == 0 || i == rings - 1 ? '#777777' : 'inherit'  }"
      >&nbsp;</div>
    </div>
    <div class="signboard" v-bind:style="{width:width + 'px'}">
      <div class="text">
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
    </div>
    <div class="stab" v-bind:style="stabclasses"></div>
  </div>
</template>

<script>
export default {
  name: "sign",
  props: {
    text: String,
    height: { default: 100, type: [Number, String] },
    width: { default: 200, type: [Number, String] },
    link: String,
    stablaenge: { default: 50, type: [String, Number] },
    kettenlaenge: { default: 0, type: [String, Number] },
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
      return {
        height: (this.$props.height || 100) + "px",
        width: (this.$props.width || 200) + "px"
      };
    },
    stabclasses() {
      return {
        height: this.stablaenge + "px"
      };
    },
    rings() {
        const retArr = [];
      const length = parseInt(parseFloat(this.kettenlaenge / 15));
      return length;
    },
    ringstyles() {
      const i = this.index;
      return {
        "margin-top": -i * 15 + "px",
        background: i == 0 || i == this.rings - 1 ? "#777777" : "inherit"
      };
    }
  }
};
</script>

<style>
.sign_total {
  display: inline-flex;
  flex-direction: column;
  padding: 20px 10px 0px 10px;
}

.kette_links {
  margin-left: 80px;
}
.ring {
  width: 15px;
  height: 15px;
  border: 3px solid gray;
  border-radius: 15px;
  position: absolute;
}
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
}
.stab {
  width: 10px;
  align-self: center;
}
.signboard {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: -5px;
  flex-direction: column;
}

@media screen and (max-width: 870px){
    .stab {
        display:none;
    }  
}

@media screen and (max-width: 400px){
    .text {
        max-width: 350px;
    }  
}

@media screen and (max-width: 600px){
    .text {
        max-width: 500px;
    }  
}

</style>