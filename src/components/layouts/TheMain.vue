<template>
  <section class="container">
    <div class="wrapper" id="wrapper" v-if="!isHome">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
    <div class="wrapper" id="wrapper" v-else>
      Home
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "TheMain",
  props: ["isHome"]
};
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  padding: 20px 50px;
  .wrapper {
    width: 100%;
    height: 100%;
    text-align: left;
  }
}

.route-enter-from {
  opacity: 0;
  transform: translatex(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translatex(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translatex(0);
}
</style>
