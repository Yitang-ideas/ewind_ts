<template>
  <div class="login__form">
    <h1>E-Wind CMS</h1>
    <form>
      <slot></slot>
      <button
        type="submit"
        class="btn__login__submit"
        @click.prevent="submitForm"
      >
        <span>登录</span>
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["form-submit"],
  setup(props, context) {
    function submitForm() {
      context.emit("form-submit");
    }
    return {
      submitForm
    };
  }
});
</script>

<style lang="scss" scoped>
.login__form {
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -150px;
  margin-left: -107px;
  display: flex;
  flex-direction: column;
  color: #fff;
  & button {
    width: 50px;
    padding: 5px 5px;
    margin-top: 10px;
    cursor: pointer;
    background: transparent;
    border-style: none;
    font-size: 16px;
    color: #fff;
    position: relative;
    & span {
      position: absolute;
      left: 0;
      top: 0;
      &:hover {
        color: rgb(200, 200, 200);
      }
    }
  }
}
</style>
