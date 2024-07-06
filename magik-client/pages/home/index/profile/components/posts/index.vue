<template>
  <div class="recommend-container">
    <ul class="moment-list">
      <li v-for="item in momentList" :key="item.id">
        <Moment :moment="item" />
      </li>
    </ul>
  </div>
</template>
<script setup>
const momentList = ref([]);
request({
  url: "/api/user/moment/110",
  params: {
    page: 1,
    limit: 100
  },
  method: "get"
}).then(res => {
  momentList.value = res.rows;
});
</script>
<style lang="less"></style>
<style lang="less" scoped>
.recommend-container {
  padding: 0 0 20px 0;
  .moment-list {
    li {
      border-top: 1px solid #f0f3f4;
      transform: all 0.3s;
      padding: 16px 20px;
      transition: all 0.3s;
      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
}
</style>
