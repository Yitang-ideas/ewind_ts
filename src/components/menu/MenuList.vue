<template>
  <div>
    <menu-item v-for="item in list" :key="item.title" :item="item"></menu-item>
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";
import { menuTree } from "../../utils/menuItems";
export default {
  components: {
    MenuItem
  },
  setup() {
    const list = menuTree;
    return {
      list
    };
  }
};
</script>

<style lang="scss"></style>
