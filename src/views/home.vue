<template>
  <div
    class="text-red-900 relative text-center pt-8 container max-w-xs mx-auto"
  >
    <div class="h-screen">
      <img class="mx-auto absolute"  :src="image" alt="ruin" />
      <button
        class="clicker h-12 w-12 relative focus:outline-none border-b-4 border-red-900 dark:border-shamrock-600 rounded-none bg-black text-white font-bold font-mono"
        type="button"
        @click="tick(1)"
      >
        {{ count }}
      </button>
      <br>
      <div class="h-8"></div>
      <span class="border-b-4 border-red-900 dark:border-shamrock-600 relative px-4 py-2 rounded-none bg-black text-white font-bold font-mono mx-auto">
        {{ mot }}
      </span>
    </div>
    <div class="">
      <h1>Music's: </h1>
      <p>77</p>
      <p>154</p>
      <p>231</p>
      <p>308</p>
      <p>385</p>
      <p>462</p>
      <p>539</p>
      <p>616</p>
      <p>693</p>
      <p>770</p>
      <p>847</p>
      <p>924</p>
      <p>1001</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "clicker",
  data() {
    // Loading images
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

    // Loading music
    var music1  = new Audio(require('../assets/music/14-Hunger-II.mp3' ));
    var music2  = new Audio(require('../assets/music/Fly-me-to-the-Moon-Midnight-Version.mp3' ));
    var music3  = new Audio(require('../assets/music/Ib-game-music-medley-20120610-by-YASUpochi.mp3' ));
    var music4  = new Audio(require('../assets/music/Igorrr-Probleme-d-emotion.mp3' ));
    var music5  = new Audio(require('../assets/music/Little-Nightmares-Lure-Of-The-Maw.mp3' ));
    var music6  = new Audio(require('../assets/music/Little-Nightmares-Prison-Toys.mp3' ));
    var music7  = new Audio(require('../assets/music/Metropolis-Soundtrack-04_Going To ''Zone''.mp3' ));
    var music8  = new Audio(require('../assets/music/Metropolis-soundtrack-17_Awakening.mp3' ));
    var music9  = new Audio(require('../assets/music/Chilly-Gonzales-Minor-Fantasy.mp3' ));
    var music10 = new Audio(require('../assets/music/Ergo-Proxy-soundtrack-11-Wasteland-Nostalgia.mp3'));
    var music11 = new Audio(require('../assets/music/Ghost-in-the-Shell-Soundtrack-Making-of-Cyborg.mp3'));
    var music12 = new Audio(require('../assets/music/Gloomy-Sunday-Billie-Holiday.mp3'));
    var music13 = new Audio(require('../assets/music/Jigoku-Shoujo-Ost-Kumo-To-Rouba-To-Shoujo.mp3'));


    return {
      // Register images
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
      // Register musics
      music1: music1,
      music2: music2,
      music3: music3,
      music4: music4,
      music5: music5,
      music6: music6,
      music7: music7,
      music8: music8,
      music9: music9,
      music10: music10,
      music11: music11,
      music12: music12,
      music13: music13,
      // Set the counter
      count: 0,// -1
      // Array (tableau) of string
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
        "Douceur",
        "Soft",
        "Fleur",
        "PrismFlower",
        "Dentelette",
        "Contraste",
        "Calme",
        "Cultiver",
        "Apprentissage",
        "Web",
        "Machine",
        "Machinal",
        "Rêves",
        "Songes",
        "Doute",
        "Mystère",
        "Secret",
        "Dangereux",
        "Questionements",
        "Conscience",
        "Destruction",
        "Revolution",
        "Change",
        "Forgiveness",
        "Betrayal",
        "Power",
        "Essence",
        "Substance",
        "Transcendance de l'ego",
        "Objet en-soi",
        "Être",
        "Être pour autrui",

      ],
      // Active word
      mot: "Ruin",
      // Active image
      image: "",
    }
  },
  mounted() {
    // this.tick(1)
    this.image = this.ville1.src
  },
  methods : { //THIS.BIATCCCCHH
    // Generate a rand number
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    tick(x) {
      if (this.count < 77) {
        this.image = this.ville1.src;
        this.music1.currentTime = 0
        this.music1.loop = true
        this.music1.volume = 0.8
        this.music1.play()
      } else if (this.count < 154) {
        this.image = this.ville2.src;
        this.music1.pause()
        this.music2.currentTime = 0
        this.music2.loop = true
        this.music2.volume = 0.8
        this.music2.play()
      } else if (this.count < 231) {
        this.image = this.ville3.src;
        this.music2.pause()
        this.music3.currentTime = 0
        this.music3.loop = true
        this.music3.volume = 0.8
        this.music3.play()
      } else if (this.count < 308) {
        this.image = this.ville4.src;
        this.music3.pause()
        this.music4.currentTime = 0
        this.music4.loop = true
        this.music4.volume = 0.8
        this.music4.play()
      } else if (this.count < 385 ) {
        this.image = this.ville5.src;
        this.music4.pause()
        this.music5.currentTime = 0
        this.music5.loop = true
        this.music5.volume = 0.8
        this.music5.play()
      } else if (this.count < 462) {
        this.image = this.ville6.src
        this.music5.pause()
        this.music6.currentTime = 0
        this.music6.loop = true
        this.music6.volume = 0.8
        this.music6.play()
      } else if (this.count < 539) {
        this.image = this.ville7.src
        this.music6.pause()
        this.music7.currentTime = 0
        this.music7.loop = true
        this.music7.volume = 0.8
        this.music7.play()
      } else if (this.count < 616) {
        this.image = this.ville8.src
        this.music7.pause()
        this.music8.currentTime = 0
        this.music8.loop = true
        this.music8.volume = 0.8
        this.music8.play()
      } else if (this.count < 693) {
        this.image = this.ville9.src
        this.music8.pause()
        this.music9.currentTime = 0
        this.music9.loop = true
        this.music9.volume = 0.8
        this.music9.play()
      } else if (this.count < 770) {
        this.image = this.ville10.src
        this.music9.pause()
        this.music10.currentTime = 0
        this.music10.loop = true
        this.music10.volume = 0.8
        this.music10.play()
      } else if (this.count < 847) {
        this.image = this.ville11.src
        this.music10.pause()
        this.music11.currentTime = 0
        this.music11.loop = true
        this.music11.volume = 0.8
        this.music11.play()
      } else if (this.count < 924) {
        this.image = this.ville12.src
        this.music11.pause()
        this.music12.currentTime = 0
        this.music12.loop = true
        this.music12.volume = 0.8
        this.music12.play()
      } else if (this.count < 1001) {
        this.image = this.ville13.src
        this.music12.pause()
        this.music13.currentTime = 0
        this.music13.loop = true
        this.music13.volume = 0.8
        this.music13.play()
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
