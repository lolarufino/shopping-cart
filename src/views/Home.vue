<template>
  <transition name="fade" mode="out-in" appear>
    <div class="home-wrapper">
      <p class="text">
        At Tea Shop we have been dedicated body and soul to the world of tea
        since 1990. Discover in our online tea shop the best selection of online
        tea where you will find Teas, Rooibos, Infusions that will make you fall
        in love.
      </p>
      <img
        class="home-image"
        src="https://i.ibb.co/sRbdSpZ/animation-640-kvl3dijl.gif"
        alt="Teapot gif"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>


<style scoped lang="scss">
@import "../styles/variables.scss";
.home-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efe7dfff;
  .text {
    font-family: $bodyfont;
    font-size: 20px;
    text-align: center;
    padding: 60px;
    color: gray;
  }
  .home-image {
    width: 450px;
    align-self: center;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>