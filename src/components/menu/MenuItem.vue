<template>
  <li
    class="menu__item"
    @click="openMenu"
    @mouseenter="toggleCard"
    @mouseleave="toggleCard"
  >
    <div class="menu__item__row" v-if="!moveLeft">
      <i class="iconfont" v-html="item.icon"></i>
      <p class="title">
        <router-link :to="item.link" @click="clickMenuItem(item)">{{
          item.title
        }}</router-link>
      </p>
      <em class="arrow" :class="{ rotate: open }">
        <b></b>
        <i></i>
      </em>
    </div>
    <div v-else class="menu__item__row--small">
      <i class="iconfont" v-html="item.icon"></i>
    </div>
    <transition name="fadeX">
      <div class="menu__card" v-if="show">
        <div v-if="item.hasSub">
          <li v-for="inner in item.subs" :key="inner.title">
            <router-link
              @click="clickMenuItem"
              class="sub__menu"
              :to="inner.link"
              >{{ inner.title }}</router-link
            >
          </li>
        </div>
        <div v-else>
          <li>
            <router-link
              class="sub__menu"
              :to="item.link"
              @click="clickMenuItem"
              >{{ item.title }}</router-link
            >
          </li>
        </div>
      </div>
    </transition>
  </li>

  <transition name="fadeY" mode="out-in" v-if="!moveLeft">
    <ul v-if="open">
      <li class="sub_item" v-for="inner in item.subs" :key="inner.title">
        <i class="iconfont" v-html="inner.icon"></i>
        <router-link :to="inner.link" @click="clickMenuItem">{{
          inner.title
        }}</router-link>
      </li>
    </ul>
  </transition>
</template>

<script lang="ts">
import { ref, inject, Ref } from "vue";

export default {
  props: ["item"],
  setup(props: any, context: any) {
    const moveLeft: Ref<boolean> | undefined = inject("moveLeft");
    const open = ref(false);
    const show = ref(false);
    function toggleCard() {
      if (moveLeft && moveLeft.value) {
        show.value = !show.value;
      }
    }

    function openMenu() {
      if (props.item.hasSub) {
        open.value = !open.value;
      }
    }

    function clickMenuItem(item: any) {
      if (item.link) {
        // alert
      }
    }
    return {
      openMenu,
      open,
      moveLeft,
      toggleCard,
      show,
      clickMenuItem
    };
  }
};
</script>

<style lang="scss" scoped>
.menu__item {
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 14px;
  cursor: pointer;
  &:hover,
  &:hover i {
    background-color: #042e83;
  }
  &__row {
    margin: 10px auto;
    position: relative;
    & > i {
      width: 10px;
      height: 10px;
      position: absolute;
      left: -30px;
      top: -1px;
    }
    & .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      // margin-right: 10px;
    }
  }
  &__row--small {
    margin: 20px auto;
  }
}
ul {
  text-align: center;
}
ul li {
  margin-bottom: 20px;
  margin-left: 5px;
}
.arrow {
  position: absolute;
  width: 12px;
  height: 12px;
  // background-color: orange;
  top: 60%;
  right: -30px;
  margin-top: -6px;
  transition: all 0.3s ease-in-out 0s;

  // &:hover {
  //   transform: rotate(90deg);
  // }
  & b {
    position: absolute;
    top: 1px;
    left: 3px;
    width: 6px;
    height: 6px;
    background-color: #fff;
    transform: rotate(45deg);
  }
  & i {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 6px;
    height: 6px;
    background-color: #002266;
    transform: rotate(45deg);
  }
}

.sub_item {
  & i {
    margin-right: 10px;
  }
}

.menu__card {
  position: absolute;
  background-color: #002266;
  width: 120px;
  margin-top: 10px;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & a {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  & li {
    list-style: none;
    margin: 10px;
    & a:hover {
      color: #5988e6;
    }
  }
}

.rotate {
  transform: rotate(90deg);
}
.fadeX-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.fadeX-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.fadeX-enter-active {
  transition: all 0.3s ease-out;
}
.fadeX-leave-active {
  transition: all 0.3s ease-in;
}
.fadeX-enter-to,
.fadeX-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.fadeY-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.fadeY-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.fadeY-enter-active {
  transition: all 0.3s ease-out;
}
.fadeY-leave-active {
  transition: all 0.3s ease-in;
}
.fadeY-enter-to,
.fadeY-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.iconfont {
  color: #fff !important;
}
</style>
