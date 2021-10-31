<template>
  <header class="content__header">
    <div class="content__header__topbar">
      <div class="left">
        <span @click="moveSidebar">
          <i class="iconfont">&#xe6fd;</i>
        </span>
      </div>
      <div class="right">
        <div class="nav__view">当前路径: {{ routePath }}</div>
        <div class="user__view">
          <span>当前用户: user</span>
          <div class="avatar" @mouseenter="showUserInfo">
            <img src="../../assets/logo-4.png" alt="" />
          </div>
        </div>
      </div>
      <base-card v-if="userInfo" class="position" @mouseleave="hideUserInfo">
        <div class="user__info">
          <img src="../../assets/background.jpg" alt="" />
          <div class="center">
            <i class="iconfont">&#xe611;</i>
            <a href="#">个人中心</a>
          </div>
          <div class="logout">
            <i class="iconfont">&#xe63d;</i>
            <a href="#" @click="logout">退出登录</a>
          </div>
        </div>
      </base-card>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import BaseCard from "../ui/BaseCard.vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    BaseCard
  },
  name: "TheHeader",
  emits: ["move-sidebar"],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(porps: any, context: any) {
    const userInfo = ref(false);
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const routePath = computed(() => {
      return route.fullPath;
    });

    function showUserInfo() {
      userInfo.value = true;
    }
    function hideUserInfo() {
      userInfo.value = false;
    }
    function logout() {
      console.log(store);
      store.dispatch("auth/logout");
      router.replace("/auth");
    }

    function moveSidebar() {
      context.emit("move-sidebar");
    }

    return {
      userInfo,
      showUserInfo,
      hideUserInfo,
      logout,
      moveSidebar,
      routePath
    };
  }
};
</script>

<style lang="scss" scoped>
.content__header {
  background: #e9f1ff;
  // height: 80px;
  &__topbar {
    display: flex;
    flex-direction: row;
    padding: 0 50px;
    line-height: 80px;
    & .left span {
      cursor: pointer;
    }
  }
}

.content__header__topbar .right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-left: 20px;
  & .nav__view {
    flex: 1;
  }
  & .user__view {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    & .avatar {
      margin-left: 20px;
      position: relative;
      & img {
        position: absolute;
        width: 30px;
        height: 30px;
        cursor: pointer;
        top: 50%;
        margin-top: -15px;
      }
    }
  }
}

.user__info {
  position: relative;
  & img {
    height: 150px;
    width: 100%;
  }
  & .center {
    line-height: 30px !important;
    margin: 10px 10px;
    & a {
      color: #777;
      margin-left: 10px;
    }
  }
  & .logout {
    line-height: 30px !important;
    margin: 10px 10px;
    & a {
      color: #777;
      margin-left: 10px;
    }
  }
  &__avatar {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    left: 10px;
  }
}

.position {
  position: absolute;
  top: 70px;
  right: 10px;
}

.nav__view__button {
  margin: auto 3px;
}
</style>
