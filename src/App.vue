<template>
  <Home />
</template>

<script lang="ts">
import Home from "./views/Home.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, watch } from "vue";
export default {
  name: "App",
  components: { Home },
  created() {
    const store = useStore();
    store.dispatch("auth/tryLogin");
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const didAutoLogout = computed(() => {
      return store.getters["auth/didAutoLogout"];
    });
    watch(didAutoLogout, (curVal: any, oldVal: any) => {
      if (curVal && curVal !== oldVal) {
        router.replace("/auth");
      }
    });

    return { didAutoLogout };
  }
  // created() {
  //   this.$store.dispatch("auth/tryLogin");
  // },
  // computed: {
  //   didAutoLogout() {
  //     return this.$store.getters["auth/didAutoLogout"];
  //   }
  // },
  // watch: {
  //   didAutoLogout(curValue, oldValue) {
  //     if (curValue && curValue !== oldValue) {
  //       this.$router.replace("/auth");
  //     }
  //   }
  // }
};
</script>
