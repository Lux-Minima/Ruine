<template>
  <div class="bg-shi-gray-200 dark:bg-black" id="app">
    <!-- HEADER -->

    <router-view />

    <!-- FOOTER -->
  </div>
</template>

<style lang="scss">
* {
  cursor: crosshair;
}
body::-webkit-scrollbar {
  width: 10px;
}
/* Track */
body::-webkit-scrollbar-track {
  background: black;
}
/* Handle */
body::-webkit-scrollbar-thumb {
  background: white;
}
/* Handle on hover */
body::-webkit-scrollbar-thumb:hover {
  background: white;
}
html {
  scrollbar-color: white black;
  scrollbar-width: thin;
}
</style>
