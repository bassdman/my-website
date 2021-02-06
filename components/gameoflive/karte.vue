<template>
  <div class="cardContainer" :class="{modifyCard:modify}">
    <div class="header">
      <span class="groupTitle" v-if="!modify">{{getCardType.label}}</span>
      <select v-if="modify" v-model="cardType">
        <option
          v-for="opt in cardTypeOptions"
          :key="opt.key"
          :selected="config.cardType == opt.selected"
          :disabled="opt.disabled"
          :value="opt.key"
        >{{opt.text}}</option>
      </select>

      <span
        class="interesseLabel"
        v-html="getInteresse.label"
        v-bind:style="{color:getInteresse.color || '#cccccc'}"
        v-if="!modify && getCardType.value=='ereignis'"
      ></span>
      <select v-if="modify && getCardType.key=='ereignis'" v-model="interesse">
        <option
          v-for="opt in interessenOptions"
          :key="opt.key"
          :selected="opt.selected"
          :disabled="opt.disabled"
          :value="opt.key"
        >{{opt.label}}</option>
      </select>
    </div>
    <h1 class="headline" v-if="!modify">{{title}}</h1>
    <input class="headline" v-model="title" v-if="modify" @focus="selectText"/>

    <div class="content" v-bind:style="{background:getInteresse.background || '#cccccccc'}">
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
        const saveObj = {
          _id: props.config._id,
          description: value
        }
        context.root.$store.commit('cards/update',saveObj);
        context.root.$store.dispatch('cards/save',saveObj);
      }
    });

    const title = computed({
      get: () => props.config.title,
      set: value => {
        const saveObj = {
          _id: props.config._id,
          title: value
        }
        context.root.$store.commit('cards/update',saveObj);
        context.root.$store.dispatch('cards/save',saveObj);
      }
    });

    const interesse = computed({
      get: () =>  props.config.interesse,
      set: value => {
        const saveObj = {
          _id: props.config._id,
          interesse: value
        }
        context.root.$store.commit('cards/update',saveObj);
        context.root.$store.dispatch('cards/save',saveObj);
      }
    });

    const cardType = computed({
      get: () =>  props.config.cardType,
      set: value => {
        const saveObj = {
          _id: props.config._id,
          cardType: value
        }
        context.root.$store.commit('cards/update',saveObj);
        context.root.$store.dispatch('cards/save',saveObj);
      }
    });

    const getInteresse = computed(() =>  interessen[props.config.interesse] || {});
    const getCardType = computed(() =>  cardTypes[props.config.cardType] || {});
    
    const interessenOptions = computed(() => {
      return Object.keys(interessen).map(interesse =>
        Object.assign(
          {
            key: interesse,
            selected: interesse == props.config.interesse
          },
          interessen[interesse]
        )
      );
    });

    const cardTypeOptions = computed(() => {
      return Object.keys(cardTypes).map(cardType =>
        Object.assign(
          {
            key: cardType,
            selected: cardType == props.config.cardType,
            text: "Kartentyp: " + cardTypes[cardType].label
          },
          cardTypes[cardType]
        )
      );
    });


    return {
      selectText,
      description,
      title,
      interesse,
      cardType,
      getInteresse,
      getCardType,
      interessenOptions,
      cardTypeOptions
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
