<template>
  <div>
    <nav-bar :searchWord="user.searchWord" />
  </div>
</template>

<script lang="ts">
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      user: {
        searchWord: "matt",
      },
    };
  },
};
</script>
