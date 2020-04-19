<template>
  <div class="cardContainer" :class="{modifyCard:modify}">
    <div class="header">
      <span class="groupTitle" v-if="!modify">{{cardTypeTitle()}}</span>
      <select v-if="modify" v-model="config.cardType" @change="save($event)">
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
        v-if="!modify && config.cardType=='action'"
      ></span>
      <select v-if="modify && config.cardType=='action'" @change="save($event)">
        <option
          v-for="opt in interessenSelect()"
          :key="opt.key"
          :selected="opt.selected"
          :value="opt.key"
        >{{opt.label}}</option>
      </select>
    </div>
    <h1 class="headline" v-if="!modify">{{config.title}}</h1>
    <input class="headline" v-model="config.title" v-if="modify" @change="save($event)" />

    <div class="content" v-bind:style="{background:interesse('background','#cccccccc')}">
      <textarea
        class="description"
        v-model="config.description"
        @change="save($event)"
        v-if="modify"
      ></textarea>
      <div class="description" v-html="config.description" v-if="!modify"></div>
    </div>
  </div>
</template>

<script>
import { db } from "../../plugins/initFirebase";

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
  }
};

const cardTypes = {
  action: {
    label: "Aktion"
  },
  global: {
    label: "Global"
  },
  assholecard: {
    label: "(Anti-) Arschlochkarte"
  }
};

export default {
  name: "card",
  props: {
    config: {
      type: Object
    },
    modify: {
      type: Boolean
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
      const doc = db.collection("cards").doc(this.config._id);
      return doc
        .set({
          title: this.config.title,
          interesse: this.config.interesse,
          description: this.config.description,
          cardType: this.config.cardType
        })
        .then(function() {
          console.log("Card successfully saved!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
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
