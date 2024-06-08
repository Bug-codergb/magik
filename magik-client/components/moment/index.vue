<template>
  <div class="moment-container">
    <div class="img-container">
      <img src="http://gips3.baidu.com/it/u=3557221034,1819987898&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960" />
    </div>
    <div class="right-container">
      <div class="header">
        <div class="left">
          <div class="user-name">{{ moment.user.userName }}</div>
          <div class="create-time">{{ moment.createTime }}</div>
        </div>
        <div class="right">
          <el-dropdown>
            <div>
              <el-icon><MoreFilled /></el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>对此帖子不感兴趣</el-dropdown-item>
                <el-dropdown-item>关注 @{{ moment.user.userName }}</el-dropdown-item>
                <el-dropdown-item>从列表中添加/移除 @{{ moment.user.userName }}</el-dropdown-item>
                <el-dropdown-item>隐藏 @{{ moment.user.userName }}</el-dropdown-item>
                <el-dropdown-item>屏蔽 @{{ moment.user.userName }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="content" v-html="moment.content"></div>
      <div class="controller">
        <ul class="controller-list">
          <li>
            <div class="circle">
              <el-icon><ChatRound /></el-icon>
            </div>
            <div class="count">123</div>
          </li>
          <li>
            <div class="circle">
              <el-icon><Crop /></el-icon>
            </div>
            <div class="count">123</div>
          </li>
          <li>
            <div class="circle">
              <el-icon><Star /></el-icon>
            </div>
            <div class="count">123</div>
          </li>
          <li>
            <div class="circle">
              <el-icon><Files /></el-icon>
            </div>
            <div class="count">123</div>
          </li>
          <li class="no-circle">
            <div class="circle">
              <el-icon><CollectionTag /></el-icon>
            </div>
            <div class="circle">
              <el-icon><Share /></el-icon>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IMoment } from "~/interface/moment";
import { MoreFilled, ChatRound, Crop, Star, Files, CollectionTag, Share } from "@element-plus/icons-vue";
const props = defineProps<{ moment: IMoment }>();
</script>
<style scoped lang="less">
.moment-container {
  display: flex;
  align-items: flex-start;

  .img-container {
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
    margin: 0 10px 0 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right-container {
    flex: 1;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 0 10px 0;
      .left {
        display: flex;
        align-items: center;
        .user-name {
          margin: 0 10px 0 0;
          font-weight: bold;
        }
        .create-time {
          font-size: 14px;
          color: #566370;
        }
      }
    }
    .content {
      font-size: 14px;
    }
    .controller {
      margin: 15px 0 0 0;
      .controller-list {
        display: flex;
        justify-content: space-between;
        & > li {
          display: flex;
          align-items: center;
          .count {
            font-size: 12px;
          }
          .circle {
            width: 34px;
            height: 34px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s;
            color: #566370;
            .el-icon {
              font-size: 18px;
            }
          }
          &:nth-child(1) {
            .circle {
              &:hover {
                background-color: #edf5fd;
                color: #4a99e9;
              }
            }
          }
          &:nth-child(2) {
            .circle {
              &:hover {
                background-color: #e6f1eb;
                color: #53b781;
              }
            }
          }
          &:nth-child(3) {
            .circle {
              &:hover {
                background-color: #f5e4eb;
                color: #e5397f;
              }
            }
          }
          &:nth-child(4) {
            .circle {
              &:hover {
                background-color: #e6eef6;
                color: #4a99e9;
              }
            }
          }

          &.no-circle {
            display: flex;
            align-items: center;
            .circle {
              width: 34px;

              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              cursor: pointer;
              transition: all 0.3s;
              &:nth-child(1) {
                &:hover {
                  background-color: #e6eef6;
                  color: #4a99e9;
                }
              }
              &:nth-child(2) {
                margin: 0 0 0 15px;
                &:hover {
                  background-color: #e6eef6;
                  color: #4a99e9;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
