<template>
  <div class="recommend-container">
    <Publish />
    <ul class="moment-list">
      <li v-for="item in momentList" :key="item.id">
        <Moment :moment="item" />
      </li>
    </ul>
  </div>
</template>
<script setup>
const momentList = ref([]);
$fetch(`/server/moment/list?page=1&limit=100`, {
  method: "post"
}).then(res => {
  momentList.value = res.rows;
});
</script>
<style lang="less" scoped>
.recommend-container {
  padding: 20px 0;
  .moment-list {
    margin: 20px 0 0 0;
    li {
      border-top: 1px solid #f0f3f4;
      transform: all 0.3s;
      padding: 12px 20px;
      transition: all 0.3s;
      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
}
</style>
