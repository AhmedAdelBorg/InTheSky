<template>
  <!-- <nav-bar @callData="callData" /> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
export default defineComponent({
  data() {
    return {
      searchWord: "",
    };
  },
  // components: {
  //   NavBar,
  // },
  methods: {
    callData(value: any) {
      this.searchWord += value;
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
