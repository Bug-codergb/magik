<template>
  <div class="recommend-header">
    <ul class="list">
      <li v-for="(item, index) in tab" :key="item" :class="{ active: currentIndex === index }" @click="tabClick(item, index)">
        <span class="label">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const tab = ["为你推荐", "正在关注"];
const currentIndex = ref(0);
const tabClick = (item: string, index: number): void => {
  currentIndex.value = index;
};
</script>
<style scoped lang="less">
.recommend-header {
  height: 100%;
  .list {
    display: flex;
    align-items: center;
    height: 100%;
    & > li {
      flex: 1;
      height: 100%;

      display: flex;
      align-items: flex-end;
      justify-content: center;
      cursor: pointer;
      .label {
        border-bottom: 4px solid #fff;
        padding-bottom: 5px;
        margin-bottom: 2px;
        transition: all 0.2s;
      }
      &.active {
        .label {
          font-weight: bold;
          border-color: #4a99e9;
        }
      }
      &:hover {
        background-color: #e7e7e8;
        .label {
          border-color: #e7e7e8;
          transition: all 0s;
        }
        &.active {
          .label {
            border-color: #4a99e9;
          }
        }
      }
    }
  }
}
</style>
