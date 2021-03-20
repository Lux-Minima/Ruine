<template>
  <div
    class="text-red-900 relative text-center pt-8 container max-w-xs mx-auto"
  >
    <div class="h-screen">
      <svg
        v-if="theme == 'light'"
        @click="themeDark()"
        class="h-6 w-6 text-white absolute top-0 right-0 martop mr-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        />
      </svg>
      <svg
        v-if="theme == 'dark'"
        @click="themeLight()"
        class="h-6 w-6 text-black absolute top-0 right-0 martop mr-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        />
      </svg>
      <div class="h-3"></div>
      <p
        class=" px-4 py-2 rounded-none bg-black dark:bg-white text-white dark:text-black font-bold font-sans mx-auto"
      >
        {{ mot }}
      </p>
      <img class="mx-auto absolute top-0 mt-20" :src="image" alt="ruin" />
      <button
        class="clicker h-12 w-12 relative focus:outline-none border-b-4 border-red-900 dark:border-shamrock-500 rounded-none bg-black dark:bg-white text-white dark:text-black font-bold font-mono"
        type="button"
        @click="tick(7)"
      >
        {{ count }}
      </button>
      <br />
    </div>
    <div class="">
      <h1>Soundtracks:</h1>
      <p><span class="font-bold">77 : 14-Hunger-II </span></p>
      <p>
        <span class="font-bold">154 : Little-Nightmares-Lure-Of-The-Maw</span>
      </p>
      <p>
        <span class="font-bold"
          >231 : Fly me to the Moon - MidnightVersion
        </span>
      </p>
      <p><span class="font-bold">308 : Minor Fantasy - C.G </span></p>
      <p><span class="font-bold">385 : Problème d'émotion </span></p>
      <p>
        <span class="font-bold"
          >462 : Wasteland Nostalgia- Ergo Proxy Soundtrack 11
        </span>
      </p>
      <p>
        <span class="font-bold"
          >539 : Making of Cyborg - Ghost in the Shell Soundtrack
        </span>
      </p>
      <p>
        <span class="font-bold">616 : Prison Toys - Little Nightmares</span>
      </p>
      <p>
        <span class="font-bold"
          >693 : Ib game music medley-20120610-by-YASUpochi</span
        >
      </p>
      <p>
        <span class="font-bold">770 : Waltz-With-Bashir-OST-04-JSB-RPG</span>
      </p>
      <p>
        <span class="font-bold"
          >847 : 04 Going_To_Zone - Metropolis 2001 Soundtracks</span
        >
      </p>
      <p><span class="font-bold">924 : Gloomy-Sunday</span></p>
      <p>
        <span class="font-bold"
          >1001 : Kumo To Rouba To Shoujo - Jigoku Shojo</span
        >
      </p>
    </div>
    <br />
    <div class="text-sm font-bold mt-24 pb-6">
      (Support our games & projects development with a donation !)
    </div>
    <div class="relative w-full h-32 ml-28 pb-10">
      <a
        class="cursor-pointer w-full block absolute z-50"
        style="width:80px;height:80px"
        target="_blank"
        href="https://www.paypal.com/paypalme/atelier404"
      ></a>
      <qrcode-vue
        class="absolute"
        background="rgba(0,0,0,0)"
        :foreground="qrcolor"
        renderAs="svg"
        :value="value"
        :size="size"
        level="H"
      />
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";

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
    var music1 = new Audio(require("../assets/music/14-Hunger-II.mp3"));
    var music2 = new Audio(
      require("../assets/music/Little-Nightmares-Lure-Of-The-Maw.mp3")
    );
    var music3 = new Audio(
      require("../assets/music/Fly-me-to-the-Moon-Midnight-Version.mp3")
    );
    var music4 = new Audio(
      require("../assets/music/Chilly-Gonzales-Minor-Fantasy.mp3")
    );
    var music5 = new Audio(
      require("../assets/music/Igorrr-Probleme-d-emotion.mp3")
    );
    var music6 = new Audio(
      require("../assets/music/Ergo-Proxy-soundtrack-11-Wasteland-Nostalgia.mp3")
    );
    var music7 = new Audio(
      require("../assets/music/Ghost-in-the-Shell-Soundtrack-Making-of-Cyborg.mp3")
    );
    var music8 = new Audio(
      require("../assets/music/Little-Nightmares-Prison-Toys.mp3")
    );
    var music9 = new Audio(
      require("../assets/music/Ib-game-music-medley-20120610-by-YASUpochi.mp3")
    );
    var music10 = new Audio(
      require("../assets/music/Waltz-With-Bashir-OST-04-JSB-RPG.mp3")
    );
    var music11 = new Audio(
      require("../assets/music/Metropolis-Soundtrack-04_Going_To_Zone.mp3")
    );
    var music12 = new Audio(
      require("../assets/music/Gloomy-Sunday-Billie-Holiday.mp3")
    );
    var music13 = new Audio(
      require("../assets/music/Jigoku-Shoujo-Ost-Kumo-To-Rouba-To-Shoujo.mp3")
    );

    return {
      // Register images
      ville1: ville1,
      ville2: ville2,
      ville3: ville3,
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
      count: 0, // -1
      // Array (tableau) of string
      motList: [
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
        "ειρήνη",
        "Environnement",
        "ελευθερία",
        "θάνατος",
        "ματωμένα",
        "ανησυχία",
        "επανάσταση ",
        "αναζωογόνηση",
        "καπνός",
        "μητέρα φύση",
        "ελευθερία ή θάνατος",
        "Menschen",
        "Angst",
        "Gift",
        "나무",
        "비",
        "살다",
        "觉得",
        "弱",
        "平静",
        "秘密",
        "错",
        "Cauchemar",
        "Esperanzia",
        "Espoir",
        "Désespoir",
        "Vivace",
        "Affamé",
        "Trümmer ",
        "Zerstörung ",
        "Erwachen ",
        "Zweifel",
        "Verzweiflung",
        "Trostlosigkeit",
        "Träumen",
        "Melancholy",
        "Nostalgia",
        "Home",
        "Homeless",
        "Sweet Home",
        "Trying",
        "Désolation",
        "Dévasté",
        "Reconstruire",
        "Bâtir"
      ],
      // Active word
      mot: "Ruin",
      // Active image
      image: "",
      theme: "",
      value: "https://www.paypal.com/paypalme/atelier404",
      size: 80,
      qrcolor: "white"
    };
  },
  components: {
    QrcodeVue
  },
  mounted() {
    // this.tick(1)
    this.image = this.ville1.src;

    //theme setup
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      this.theme = "dark";
      this.qrcolor = "white";
    } else {
      document.documentElement.classList.remove("dark");
      this.theme = "light";
      this.qrcolor = "black";
    }
  },
  methods: {
    //THIS.BIATCCCCHH
    // Theme action
    themeLight() {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      this.theme = "light";
      this.qrcolor = "black";
    },
    themeDark() {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      this.theme = "dark";
      this.qrcolor = "white";
    },
    // Generate a rand number
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    tick(x) {
      if (this.count < 77) {
        this.image = this.ville1.src;
        if (this.count == 7) {
          this.music1.currentTime = 0;
          this.music1.loop = true;
          this.music1.volume = 0.8;
          this.music1.play();
        }
      } else if (this.count < 154) {
        this.image = this.ville2.src;
        if (this.count == 77) {
          this.music1.pause();
          this.music2.currentTime = 0;
          this.music2.loop = true;
          this.music2.volume = 0.8;
          this.music2.play();
        }
      } else if (this.count < 231) {
        this.image = this.ville3.src;
        if (this.count == 154) {
          this.music2.pause();
          this.music3.currentTime = 0;
          this.music3.loop = true;
          this.music3.volume = 0.8;
          this.music3.play();
        }
      } else if (this.count < 308) {
        this.image = this.ville4.src;
        if (this.count == 231) {
          this.music3.pause();
          this.music4.currentTime = 0;
          this.music4.loop = true;
          this.music4.volume = 0.8;
          this.music4.play();
        }
      } else if (this.count < 385) {
        this.image = this.ville5.src;
        if (this.count == 308) {
          this.music4.pause();
          this.music5.currentTime = 0;
          this.music5.loop = true;
          this.music5.volume = 0.8;
          this.music5.play();
        }
      } else if (this.count < 462) {
        this.image = this.ville6.src;
        if (this.count == 385) {
          this.music5.pause();
          this.music6.currentTime = 0;
          this.music6.loop = true;
          this.music6.volume = 0.8;
          this.music6.play();
        }
      } else if (this.count < 539) {
        this.image = this.ville7.src;
        if (this.count == 462) {
          this.music6.pause();
          this.music7.currentTime = 0;
          this.music7.loop = true;
          this.music7.volume = 0.8;
          this.music7.play();
        }
      } else if (this.count < 616) {
        this.image = this.ville8.src;
        if (this.count == 539) {
          this.music7.pause();
          this.music8.currentTime = 0;
          this.music8.loop = true;
          this.music8.volume = 0.8;
          this.music8.play();
        }
      } else if (this.count < 693) {
        this.image = this.ville9.src;
        if (this.count == 616) {
          this.music8.pause();
          this.music9.currentTime = 0;
          this.music9.loop = true;
          this.music9.volume = 0.8;
          this.music9.play();
        }
      } else if (this.count < 770) {
        this.image = this.ville10.src;
        if (this.count == 693) {
          this.music9.pause();
          this.music10.currentTime = 0;
          this.music10.loop = true;
          this.music10.volume = 0.8;
          this.music10.play();
        }
      } else if (this.count < 847) {
        this.image = this.ville11.src;
        if (this.count == 770) {
          this.music10.pause();
          this.music11.currentTime = 0;
          this.music11.loop = true;
          this.music11.volume = 0.6;
          this.music11.play();
        }
      } else if (this.count < 924) {
        this.image = this.ville12.src;
        if (this.count == 847) {
          this.music11.pause();
          this.music12.currentTime = 0;
          this.music12.loop = true;
          this.music12.volume = 0.8;
          this.music12.play();
        }
      } else if (this.count < 1001) {
        this.image = this.ville13.src;
        if (this.count == 924) {
          this.music12.pause();
          this.music13.currentTime = 0;
          this.music13.loop = true;
          this.music13.volume = 0.8;
          this.music13.play();
        }
      }
      this.count += x;
      this.mot = this.motList[this.getRandomInt(this.motList.length)];
    }
  }
};
</script>

<style lang="css">
.martop {
  margin-top: 3.25rem;
}
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
