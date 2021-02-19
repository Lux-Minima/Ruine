<template>
  <div class="text-red-900 h-screen text-center pt-16 container max-w-6xl mx-auto">
    <img :src="ville1.src" alt="">
    <button class="clicker relative mt-16 focus:outline-none rounded-none px-8 py-4 border-red-500 bg-red-500 text-black font-bold font-mono" type="button" name="button">
      CLICK
    </button>
  </div>
</template>

<script>
export default {
  name: "clicker",
  data() {
    var ville1 = new Image();
    ville1.src = require("./assets/1_VILLE.png")

    return {
      ville1 : ville1
    }
  }

}
</script>

<style lang="css">
.clicker {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  box-shadow: 0 3px 0 0 darkred;
}
.clicker:active {
  top: 3px;
  box-shadow: none;
}
</style>
