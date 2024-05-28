<template>
  <div class="media-crop-container">
    <el-dialog
      v-model="isShow"
      title="裁剪媒体"
      width="600px"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <template #header>
        <div class="controller">
          <div class="left">
            <div class="back" @click="handleCancel">
              <el-icon><Back /></el-icon>
            </div>
            <div class="title">裁剪媒体</div>
          </div>
          <div class="right">
            <div class="back">
              <el-icon><Back /></el-icon>
            </div>
            <div class="back">
              <el-icon><Right /></el-icon>
            </div>
            <div class="save">保存</div>
          </div>
        </div>
      </template>
      <div>
        <el-tabs v-model="activeTab" class="demo-tabs" :stretch="true">
          <el-tab-pane label="User" name="first">
            <template #label>
              <el-icon><Crop /></el-icon>
            </template>
          </el-tab-pane>
          <el-tab-pane label="Config" name="second">
            <template #label>
              <span>ALT</span>
            </template>
          </el-tab-pane>
          <el-tab-pane label="Role" name="third">
            <template #label>
              <el-icon><CollectionTag /></el-icon>
            </template>
          </el-tab-pane>
        </el-tabs>
      </div>
      <template #footer> </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { Back, Right, Crop, CollectionTag } from "@element-plus/icons-vue";

const activeTab = ref("first");

const isShow = ref(false);
const showDialog = (fileList) => {
  isShow.value = true;
};
const handleCancel = () => {
  isShow.value = false;
};
const handleConfirm = () => {};
defineExpose({
  showDialog,
});
</script>
<style lang="less" scoped>
.media-crop-container {
  .controller {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left,
    .right {
      display: flex;
      align-items: center;
      .title {
        margin: 0 0 0 10px;
      }
      .back {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #d1d9dd;
        padding: 3px;
        border-radius: 50%;
        transition: all 0.3s;
        cursor: pointer;
        .el-icon {
          font-size: 20px;
        }
        &:hover {
          background-color: #e7e7e8;
        }
      }
    }
    .right {
      .back {
        margin: 0 0 0 10px;
      }
      .save {
        background-color: #101419;
        color: #fff;
        padding: 6px 15px;
        transition: all 0.3;
        border-radius: 18px;
        font-size: 14px;
        margin: 0 0 0 10px;
        cursor: pointer;
        &:hover {
          background-color: #282c30;
        }
      }
    }
  }
}
</style>
