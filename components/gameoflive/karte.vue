<template>
  <div class="cardContainer" :class="{modifyCard:modify}">
    <div class="header">
      <span class="groupTitle" v-if="!modify">{{cardTypeTitle()}}</span>
      <select v-if="modify" @change="save($event)" id="cardType">
        <option
          v-for="opt in typeSelect()"
          :key="opt.key"
          :selected="opt.selected"
          :value="opt.key"
        >{{opt.text}}</option>
      </select>

      <span
        class="interesseLabel"
        v-html="interesse('label')"
        v-bind:style="{color:interesse('color','#cccccc')}"
        v-if="!modify && config.cardType=='ereignis'"
      ></span>
      <select v-if="modify && config.cardType=='ereignis'" @change="save($event)" id="interesse">
        <option
          v-for="opt in interessenSelect()"
          :key="opt.key"
          :selected="opt.selected"
          :value="opt.key"
        >{{opt.label}}</option>
      </select>
    </div>
    <h1 class="headline" v-if="!modify">{{title}}</h1>
    <input class="headline" v-model="title" v-if="modify" @focus="selectText"/>

    <div class="content" v-bind:style="{background:interesse('background','#cccccccc')}">
      <textarea class="description" v-model="description" v-if="modify" @focus="selectText"></textarea>
      <div class="description" v-html="description" v-if="!modify"></div>
    </div>
  </div>
</template>

<script>

import { ref, computed } from '@vue/composition-api';
import { interessen, cardTypes } from '../../store/cards';

export default {
  name: "card",
  props: {
    config: {
      type: Object
    },
    modify: {
      type: Boolean
    },
    id : {
      type: Number
    }
  },
  setup(props, context){
    function selectText(evt){
      evt.target.select();
    }

    const description = computed({
      get: () => props.config.description,
      set: value => {
        const saveObj = Object.assign({}, props.config);
        saveObj.description = value;
        context.root.$store.dispatch('cards/save',saveObj);
      }
    });

    const title = computed({
      get: () => props.config.title,
      set: value => {
        const saveObj = Object.assign({}, props.config);
        saveObj.title = value;
        context.root.$store.dispatch('cards/save',saveObj);
      }
    });

    return {
      selectText,
      description,
      title,
    }
  },
  methods: {
    interessenSelect() {
      return Object.keys(interessen).map(interesse =>
        Object.assign(
          {
            key: interesse,
            selected: interesse == this.config.interesse
          },
          interessen[interesse]
        )
      );
    },
    typeSelect() {
      return Object.keys(cardTypes).map(cardType =>
        Object.assign(
          {
            key: cardType,
            selected: cardType == this.config.cardType,
            text: "Kartentyp: " + cardTypes[cardType].label
          },
          cardTypes[cardType]
        )
      );
    },
    cardTypeTitle() {
      const cardType = cardTypes[this.config.cardType];

      if (cardType) return cardType.label;

      return "type '" + this.config.cardType + "' has no title.";
    },
    interesse(key, _default = "") {
      return interessen[this.config.interesse]
        ? interessen[this.config.interesse][key]
        : _default;
    },
    save(evt) {
      const saveObj = Object.assign({}, this.config);
      saveObj[evt.target.id] = evt.target.value;

      this.$store.commit("cards/update", saveObj);
      this.$store.dispatch("cards/save", saveObj);
    }
  }
};
</script>


<style scoped>
@font-face {
  font-family: Exo2;
  src: url("~assets/Exo2-Medium.ttf");
}

.cardContainer {
  width: 74mm;
  height: 105mm;
  border: 1px solid black;
  background: white;
  color: black;
  padding: 10px;
}
.headline {
  margin: 5px 0px 15px 0px;
  display: block;
  text-align: center;
  font-weight: normal;
  width: 100%;
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
  text-align: center;
  padding: 10px;
}
.modifyCard:hover {
  box-shadow: 0px 0px 4px 4px white;
  box-sizing: content-box;
  border: 1px solid white;
}

.modifyCard input:hover,
.modifyCard textarea:hover {
  cursor: pointer;
  box-sizing: content-box;
  outline: none;
  color: gray;
  padding: 0px;
}

.modifyCard .description {
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  padding: 0px;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  text-align: center;
  outline: none;
}

input {
  border: none;
  outline: none;
}
</style>
