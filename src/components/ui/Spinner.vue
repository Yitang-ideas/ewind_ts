<template>
  <span class="spinner">
    <i class="iconfont rotate">&#xe77d;</i>
  </span>
</template>

<style lang="scss" scoped>
.rotate {
  position: absolute;
  line-height: 1;
  color: #275cf0 !important;
  animation: loading-spin 1s linear infinite;
}
@keyframes loading-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
.spinner {
  display: inline-block;
  margin-left: 50%;
  margin-top: 750px;
}
</style>
