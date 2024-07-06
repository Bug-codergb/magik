<template>
  <div class="profile">
    <div class="banner"></div>
    <div class="user-avatar">
      <div></div>
      <div class="avatar">{{ userDetail?.userName.substring(0, 1) }}</div>
      <div class="edit-btn">编辑个人资料</div>
    </div>
    <ul class="user-info">
      <li>
        {{ userDetail?.userName }}
      </li>
      <li>
        <el-icon><Calendar /></el-icon>
        <div>{{ userDetail?.createTime }}加入</div>
      </li>
    </ul>
    <el-tabs v-model="activeName" :stretch="true" class="demo-tabs">
      <el-tab-pane label="帖子" name="post">
        <div class="common">
          <Posts />
        </div>
      </el-tab-pane>
      <el-tab-pane label="回复" name="reply">
        <div class="common"></div>
      </el-tab-pane>
      <el-tab-pane label="亮点" name="sharp">
        <div class="common"></div>
      </el-tab-pane>
      <el-tab-pane label="文章" name="word">
        <div class="common"></div>
      </el-tab-pane>
      <el-tab-pane label="媒体" name="media">
        <div class="common"></div>
      </el-tab-pane>
      <el-tab-pane label="喜欢" name="fav">
        <div class="common"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { Calendar } from "@element-plus/icons-vue";
import { type IUser } from "~/interface/nav";
import Posts from "./components/posts/index.vue";
const userDetail = ref<IUser | null>(null);
const activeName = ref("post");
request({
  url: "/api/user/detail/110",
  method: "post"
}).then(res => {
  if (res.code === 200) {
    userDetail.value = res.data;
  }
});
</script>
<style lang="less">
.profile {
  width: 100%;
  .banner {
    height: 200px;
    background-color: rgb(209, 217, 221);
  }
  .user-avatar {
    display: flex;
    position: relative;
    width: 100%;
    justify-content: space-between;
    padding: 15px;
    .avatar {
      width: 133px;
      height: 133px;
      background-color: #df742c;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      border: 4px solid #fff;
      transform: translate(20px, -50%);
    }
    .edit-btn {
      border: 1px solid #d1d9dd;
      &:hover {
        background-color: #e7e7e8;
        cursor: pointer;
      }
    }
  }
  .user-info {
    display: flex;
    flex-direction: column;
    padding: 15px;
    & > li {
      display: flex;
      align-items: center;
      padding: 5px 0;
      .el-icon {
        margin: 0 10px 0 0;
      }
    }
  }

  .el-tabs__header {
    margin-bottom: 0px;
  }
}
</style>
