<template>
  <v-app>
    <Drawer class="drawer"/>
    <v-container fluid grid-list-md class="desktop">
      <router-view :key="$route.fullPath"></router-view>
    </v-container>
    <Footer v-if="isMobile"/>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Header from "./common/Header";
import Footer from "./common/Footer";
import Drawer from "./common/Drawer";
import Login from "./components/Login";
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Drawer,
    Login,
    Category
  },
  computed: mapGetters(["recipes", "categories", "isLoggedIn"]),
  data() {
    return {
      isMobile: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  methods: {
    getWindowWidth(event) {
      this.isMobile = document.documentElement.clientWidth <= 880;
    },
    toggleMobile() {
      this.isMobile ? "" : "desktop";
    },
    ...mapActions(["getRecipes"])
  },
  created() {
    this.getRecipes();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  z-index: 0;
  background: #fafafa;
}

.app {
  display: flex !important;
}

.desktop {
  background: #fff;
  max-width: 60%;
  margin-left: 31%;
}

p {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
}

@media screen and (max-width: 880px) {
  .desktop {
    max-width: 100%;
    margin-left: 0;
  }
}
</style>
