<template>
  <div
    class="text-red-900 relative h-screen text-center pt-8 container max-w-xs mx-auto"
  >
    <img class="mx-auto absolute"  :src="image" alt="" />
    <button
      class="clicker h-12 w-12 relative focus:outline-none border-b-4 border-red-900 dark:border-shamrock-600 rounded-none bg-black text-white font-bold font-mono"
      type="button"
      @click="tick(7)"
    >
      {{ count }}
    </button>
    <br>
    <div class="h-8"></div>
    <span class="border-b-4 border-red-900 dark:border-shamrock-600 relative px-4 py-2 rounded-none bg-black text-white font-bold font-mono mx-auto">
      {{ mot }}
    </span>
  </div>
</template>

<script>
export default {
  name: "clicker",
  data() {
    var ville1 = new Image();
    ville1.src = require("../assets/1_VILLE.png");

    var ville2 = new Image();
    ville2.src = require("../assets/2_GRISEVILLE.png");

    var ville3 = new Image();
    ville3.src = require("../assets/3_COLLAPSE.png");

    var ville4 = new Image();
    ville4.src = require("../assets/4_CHAOS.png");

    var ville5 = new Image();
    ville5.src = require("../assets/5_NOISE.png");

    var ville6 = new Image();
    ville6.src = require("../assets/6_SENTIER.png");

    var ville7 = new Image();
    ville7.src = require("../assets/7_RENAISSANCE.png");

    var ville8 = new Image();
    ville8.src = require("../assets/8_VIE.png");

    var ville9 = new Image();
    ville9.src = require("../assets/9_ESCARGOT.png");

    var ville10 = new Image();
    ville10.src = require("../assets/10_EVEIL.png");

    var ville11 = new Image();
    ville11.src = require("../assets/11_BOURGEON.png");

    var ville12 = new Image();
    ville12.src = require("../assets/12_DOUCEUR.png");

    var ville13 = new Image();
    ville13.src = require("../assets/13_pluie.gif");

    return {
      ville1: ville1,
      ville2: ville2,
      ville3:  ville3,
      ville4: ville4,
      ville5: ville5,
      ville6: ville6,
      ville7: ville7,
      ville8: ville8,
      ville9: ville9,
      ville10: ville10,
      ville11: ville11,
      ville12: ville12,
      ville13: ville13,
      count: 0,// -1
      motList : [
        "Evolution",
        "Progress",
        "Development",
        "Noise",
        "Chaos",
        "Collapse",
        "Griseville",
        "Renaissance",
        "Infected",
        "Eveil",
        "Awakening",
        "首都",
        "مدينة الأشباح",
        "город",
        "Plantae",
        "Cells",
        "Vegetal Apogy",
        "Deforestation",

      ],
      mot: "Ruin",
      image: "",
    }
  },
  mounted() {
    // this.tick(1)
    this.image = this.ville1.src
  },
  methods : { //THIS.BIATCCCCHH
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    tick(x) {
      if (this.count < 77) {
        this.image = this.ville1.src;
      } else if (this.count < 154) {
        this.image = this.ville2.src;
      } else if (this.count < 231) {
        this.image = this.ville3.src;
      } else if (this.count < 308) {
        this.image = this.ville4.src;
      } else if (this.count < 385 ) {
        this.image = this.ville5.src;
      } else if (this.count < 462) {
        this.image = this.ville6.src
      } else if (this.count < 539) {
        this.image = this.ville7.src
      } else if (this.count < 616) {
        this.image = this.ville8.src
      } else if (this.count < 693) {
        this.image = this.ville9.src
      } else if (this.count < 770) {
        this.image = this.ville10.src
      } else if (this.count < 847) {
        this.image = this.ville11.src
      } else if (this.count < 924) {
        this.image = this.ville12.src
      } else if (this.count < 1001) {
        this.image = this.ville13.src
      }
      this.count += x;
      this.mot = this.motList[this.getRandomInt(this.motList.length)]

    }
  }
}
</script>

<style lang="css">
.clicker {
  margin-top: 413px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* box-shadow: 0 3px 0 0 darkred; */
}
.clicker:active {
  top: 3px;
  border: none;
}
</style>
