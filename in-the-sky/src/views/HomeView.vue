<template>
  <div class="home">
    <nav-bar @callData="callData" />
    <data-pigeon :searchWord="searchWord" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataPigeon from "@/components/DataPigeon.vue";
import NavBar from "@/components/NavBar.vue";
export default defineComponent({
  data() {
    return {
      searchWord: "",
    };
  },
  components: {
    NavBar,
    DataPigeon,
  },
  methods: {
    callData(value: any) {
      this.searchWord = value;
    },
  },
});
</script>
