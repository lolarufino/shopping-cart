<template>
  <transition name="fade" mode="out-in" appear>
    <div class="home-wrapper">
      <img
        class="home-image"
        src="https://i.ibb.co/zJsjwP6/i-Macresidez.png"
        alt="iMac illustration"
      />
      <p class="text">
        Buy electronics online at best prices in Spain. Shop from a huge range
        of electronic products such as TVs, laptops, cameras, video games &
        more. Created in Spain October 2021 under the name of E Shop the company
        was immediately known on the Spanish market of distribution.<br /><br />
        <router-link to="/products">
          <button class="button">Start shopping now!</button>
        </router-link>
      </p>
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
  background-color: lightgray;
  margin-top: 10px;
  .text {
    font-family: $bodyfont;
    font-size: 20px;
    text-align: center;
    padding: 40px;
    color: gray;
    .button {
      font-family: $titlefont;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      padding: 20px;
      border: none;
      color: white;
      background-color: $maincolor;
      border-radius: 10px;
      text-shadow: 1px 1px 1px lightgray;
      transition: all 300ms ease-in-out;
      &:hover {
        background-color: $secondarycolor;
      }
    }
  }
  .home-image {
    width: 50%;
    margin-top: 20px;
    align-self: center;
  }
}
@media screen and (min-width: 720px) {
  .home-wrapper {
    display: flex;
    flex-direction: row;
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