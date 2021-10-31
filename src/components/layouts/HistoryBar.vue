<template>
  <div class="route__bar">
    <div class="route__bar__view">
      <span>历史导航栏 - </span>
      <div class="group" v-for="num in nums" :key="num">
        <route-button
          class="route__button"
          :name="historyArr[num].name"
          :num="num"
          @navigate-to="navigateTo"
        ></route-button>
        <i class="iconfont" @click="closeBtn(num)">&#xe6dc;</i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, watch } from "vue";
import RouteButton from "../ui/RouteButton.vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
interface RouteHistoryProp {
  name: string | symbol | null | undefined;
  path: string;
}
export default {
  components: {
    RouteButton
  },
  setup(props: any, context: any) {
    const route = useRoute();
    const nums = ref(0);
    const router = useRouter();
    const historyArr = ref<RouteHistoryProp[]>([{ name: "首页", path: "/" }]);

    const routeLink = computed(() => {
      return route.fullPath;
    });
    const routeName = computed(() => {
      return route.name;
    });
    watch(routeName, (curVal: any, oldVal: any) => {
      const findSame = historyArr.value.find(h => h.name === curVal);

      if (historyArr.value.length === 5 && !findSame) {
        nums.value -= 1;
        historyArr.value.shift();
      }
      if (!findSame) {
        historyArr.value.push({
          name: routeName.value,
          path: routeLink.value
        });
        nums.value += 1;
      }
    });

    function navigateTo(id: number) {
      router.push({ path: historyArr.value[id].path.toString() });
    }

    function closeBtn(id: number) {
      historyArr.value.splice(id, 1);
      nums.value -= 1;
    }

    return {
      routeName,
      routeLink,
      navigateTo,
      historyArr,
      nums,
      closeBtn
    };
  }
};
</script>

<style lang="scss" scoped>
.route__bar {
  width: 100%;
  background-color: #fff;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #b6c9ee;
  &__view {
    span:nth-child(1) {
      margin-left: 50px;
    }
  }
}
.group {
  display: inline-block;
  margin-right: 10px;
  & i {
    margin-left: 3px;
    cursor: pointer;
  }
  & i:hover {
    background-color: #d1dcf3;
  }
}
</style>
