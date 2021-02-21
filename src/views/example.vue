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
    ville4.src = require("../assets/4_CHAOS.png")

    return {
      ville1: ville1,
      ville2: ville2,
      ville3:  ville3,
      ville4: ville4,
      count: 0,// -1
      motList : [
        "Incohérence",
        "Deux mots",
        "Trois mots",
      ],
      mot: "Ruin",
      image: ""
    };
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
      }
      this.count += x;
      this.mot = this.motList[this.getRandomInt(this.motList.length)]

    }
  }
};
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
