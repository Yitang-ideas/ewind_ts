<template>
  <button class="btn btn-outline" v-html="name"></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      default: "提交",
      required: false
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.btn,
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 30px;
  display: inline-block;
  border-radius: 3px;
  transition: all 0.2s;
  position: relative;
  font-size: 14px;
  border: none;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}

.btn:hover::after {
  transform: scale(1.1);
  opacity: 0;
}

.btn:active,
.btn:focus {
  transform: translateY(-1px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.btn--white {
  background-color: #fff;
  color: #777;
}
.btn--white::after {
  background-color: #fff;
}

.btn-outline {
  background-color: transparent;
  border: 1px solid $main-color-light;
}

.btn-outline:hover {
  background-color: $main-color-light;
  color: #fff;
}

.btn--light {
  background-color: $main-color-light;
  color: #fff;
}
.btn--light::after {
  background-color: $main-color-dark;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.3s;
}

.btn--animated {
  animation: moveInBottom 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
}

.btn-text:link,
.btn-text:visited {
  font-size: 14px;
  color: $main-color-normal;
  display: inline-block;
  text-decoration: none;
  border-bottom: 1pxrem solid $main-color-normal;
  padding: 3px;
  transition: all 0.2s ease-out;
}

.btn-text:hover {
  background-color: $main-color-normal;
  color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.btn-text:active {
  box-shadow: 0 5px 1px rgba(0, 0, 0, 0.2);
  transform: translateY(0);
}
</style>
