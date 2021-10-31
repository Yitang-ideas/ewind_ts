<template>
  <div class="base" v-if="withHead">
    <the-toast :class="toastCssType" v-if="message.show">{{
      message.text
    }}</the-toast>
    <side-bar :class="moveSidebarCssType"></side-bar>
    <div class="content">
      <the-header @move-sidebar="moveSidebar"></the-header>
      <history-bar></history-bar>
      <the-main :isHome="isHome"></the-main>
      <the-footer></the-footer>
    </div>
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, provide } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import TheHeader from "../components/layouts/TheHeader.vue";
import SideBar from "../components/layouts/SideBar.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import TheToast from "../components/ui/TheToast.vue";
import HistoryBar from "../components/layouts/HistoryBar.vue";
import TheMain from "../components/layouts/TheMain.vue";

export default defineComponent({
  components: {
    TheHeader,
    SideBar,
    TheFooter,
    TheToast,
    HistoryBar,
    TheMain
  },
  setup() {
    const message = ref({ type: "", show: false, text: "" });
    const toastType = ref("");
    const moveLeft = ref(false);
    const store = useStore();
    const route = useRoute();
    const globalMessage = store.getters["messages/getMessage"];
    if (store.getters["auth/isAuthenticated"]) {
      message.value = { ...globalMessage };
      toastType.value = message.value.type;
    }
    setTimeout(() => {
      message.value.type = "";
      message.value.show = false;
      message.value.text = "";
    }, 2000);

    store.dispatch("messages/setMessageAction", {
      type: "",
      show: false,
      text: ""
    });

    const toastCssType = computed(() => {
      return toastType.value === "success" ? "toast__success" : "toast__error";
    });

    const moveSidebar = () => {
      moveLeft.value = !moveLeft.value;
    };

    const moveSidebarCssType = computed(() => {
      if (moveLeft.value) {
        return "move__out";
      } else {
        return "move__in";
      }
    });

    const isHome = computed(() => route.meta.isHome);
    const withHead = computed(() => route.meta.withHead);

    provide("moveLeft", moveLeft);

    return {
      message,
      toastType,
      toastCssType,
      moveSidebar,
      moveSidebarCssType,
      moveLeft,
      isHome,
      withHead
    };
  }
});
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.base {
  display: flex;
  flex-direction: row;
}

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
