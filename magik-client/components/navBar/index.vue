<template>
  <div class="nav-bar">
    <div class="logo-container">
      <div class="home-btn">
        <Logo />
      </div>
    </div>
    <ul class="list">
      <li
        v-for="(item, index) in menu"
        :key="item.label"
        class="item"
        :class="{ active: index === currentIndex }"
        @click="navClick(item, index)"
      >
        <div class="shadow">
          <component :is="item.icon" />
          <div class="title">{{ item.title }}</div>
        </div>
      </li>
    </ul>
    <div class="publish">发帖</div>
    <div class="publish user-info">个人</div>
  </div>
</template>
<script setup lang="ts">
import { menu } from "~/constant/menu";
import Logo from "~/assets/svg/logo.vue";
import type { INav } from "~/interface/nav";
const currentIndex = ref(0);
const router = useRouter();
const currentRoute = useCurrentRoute();
onMounted(() => {
  currentRoute.changeCurrentRoute(menu[0]);
});
const navClick = (item: INav, index: number): void => {
  currentIndex.value = index;
  router.push({
    path: item.path
  });
  currentRoute.changeCurrentRoute(item);
};
</script>
<style lang="less">
.nav-bar {
  .list {
    display: flex;
    flex-direction: column;
    .item {
      width: 100%;
      display: inline-flex;
      align-items: center;
      padding: 0;
      cursor: pointer;
      width: auto;

      .shadow {
        width: auto;
        display: flex;
        align-items: center;
        padding: 12px 20px 12px 14px;
        transition: all 0.3s;
        border-radius: 24px;
      }
      .title {
        margin: 0 0 0 20px;
        font-size: 20px;
      }
      &.active {
        font-weight: bold;
      }
      &:hover {
        .shadow {
          background-color: #e7e7e8;
        }
      }
    }
  }
  .publish {
    width: 100px;
    background-color: #4a99e9;
    font-size: 17px;
    font-weight: bold;
    padding: 10px 20px;
    text-align: center;
    color: #fff;
    border-radius: 20px;
    width: 80%;
    margin: 20px 0 0 0;
    &:hover {
      background-color: #428ad2;
      cursor: pointer;
    }
  }
  .user-info {
    background-color: #e7e7e8;
  }
}
.logo-container {
  height: 53px;
  display: flex;
  align-items: center;
  .home-btn {
    height: 100%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover {
      background-color: #e7e7e8;
      transition: all 0.5s;
      cursor: pointer;
    }
  }
}
</style>
