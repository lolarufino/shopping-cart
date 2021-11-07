<template>
  <div class="wrapper">
    <Nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "../src/components/Nav.vue";

export default defineComponent({
  name: "App",
  components: {
    Nav,
  },
});
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.wrapper {
  background-color: lightgray;
  height: 100vh;
}
</style>
