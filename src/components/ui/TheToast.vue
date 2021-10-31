<template>
  <div class="toast">
    <slot>message</slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 3%;
  left: 50%;
  width: 300px;
  margin-left: -100px;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &__success {
    background: rgba(93, 199, 75, 0.7);
    color: #fff;
  }
  &__error {
    background: rgba(240, 73, 23, 0.8);
    color: #fff;
  }
  &__text {
    background: rgba(0, 0, 0, 0.35);
    color: #fff;
  }
}
</style>
