<template>
  <div class="sidebar">
    <div class="sidebar__content">
      <div class="sidebar__content__logo">
        <router-link to="/"
          ><img :src="logoSrc" :class="{ small: moveLeft }" alt="logo"
        /></router-link>
      </div>

      <!-- <div class="position"></div> -->
      <div class="sidebar__content__search">
        <form :class="{ is__disabled: moveLeft }" @submit.prevent="submitForm">
          <input type="text" placeholder="请输入关键字" />
        </form>
      </div>
      <menu-list></menu-list>
    </div>
  </div>
</template>

<script>
import { computed, inject } from "vue";
import MenuList from "../menu/MenuList.vue";
// const MenuList = defineAsyncComponent(() => import("../menu/MenuList.vue"));

export default {
  components: {
    MenuList
  },
  setup() {
    const moveLeft = inject("moveLeft");
    const logoSrc = computed(() => {
      if (moveLeft.value) {
        return require("@/assets/logo-4.png");
      } else {
        return require("@/assets/logo-2.png");
      }
    });
    function submitForm() {
      alert("稍后添加");
    }
    return {
      moveLeft,
      logoSrc,
      submitForm
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 210px;
  height: 100vh;
  background-color: #002266;
  z-index: 100;
  &__content {
    display: flex;
    flex-direction: column;
    color: #fff;
    &__logo {
      background-color: #001a4d;
      height: 80px;
    }
    &__logo img {
      display: block;
      width: 60%;
      margin-top: 20px;
      margin: 20px 0 20px 30px;
    }
    &__search {
      margin-bottom: 20px;
      & .disabled {
        display: none;
      }
      form {
        width: 100%;
        height: 30px;
        animation: move 1s;
        & input {
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          outline: none;
        }
      }
    }
  }
}

.position {
  height: 30px;
  background-color: #e2e2e2;
}

.is__disabled {
  display: none;
}

.small {
  width: 80% !important;
  margin: 10px auto !important;
}

.move__out {
  margin-left: -5px;
  transition: margin-left 0.5s ease-out;
}
.move__in {
  margin-left: 0px;
  transition: margin-left 0.5s ease-out;
}

// .sidebar-enter-from {
//   opacity: 0;
//   transform: translatex(-30px);
// }

// .sidebar-leave-to {
//   opacity: 0;
//   transform: translatex(30px);
// }

// .sidebar-enter-active {
//   transition: all 0.3s ease-out;
// }
// .sidebar-leave-active {
//   transition: all 0.3s ease-in;
// }
// .sidebar-enter-to,
// .sidebar-leave-from {
//   opacity: 1;
//   transform: translatex(0);
// }
</style>
