<template>
  <div class="publish-container">
    <div class="left-container">
      <img :src="user.avatarUrl" />
    </div>
    <div class="right-container">
      <div class="content">
        <textarea v-model="formData.content" rows="3" cols="4" type="textarea" placeholder="有什么新鲜事" />
      </div>
      <ul class="img-list">
        <li v-for="(item, index) in fileList" :key="item" class="item">
          <div class="img-container">
            <img :src="item.url" />
            <div class="edit" @click="handleEditMedia(item, index)">编辑</div>
            <div class="delete">
              <el-icon><Close /></el-icon>
            </div>
          </div>
        </li>
      </ul>
      <div class="at">所有人可以回复</div>
      <div class="controller">
        <div class="left">
          <input type="file" @change="handleFile" title="媒体" />
          <Media />
        </div>
        <div class="right">
          <button class="btn">发帖</button>
        </div>
      </div>
    </div>
    <MediaCrop ref="mediaCropRef" />
  </div>
</template>
<script setup lang="ts">
import { Close } from "@element-plus/icons-vue";
import Media from "~/assets/svg/media";
import type { IMedia } from "~/interface/media";

const user = useUserMsg();
const formData = reactive({
  content: ""
});
const fileList = reactive<IMedia[]>([]);
const handleFile = async (e): void => {
  const file: File = e.target.files[0];
  const formData = new FormData();
  formData.append("file", file);
  const res = await $fetch("/api/file/upload", { method: "post", body: formData });
  fileList.push({
    url: res.data,
    file
  });
};

const mediaCropRef = ref();
const handleEditMedia = (item, index): void => {
  mediaCropRef.value?.showDialog(fileList);
};
</script>
<style scoped lang="less">
.publish-container {
  display: flex;
  align-items: flex-start;
  width: 100%;
  .left-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right-container {
    margin: 0 0 0 10px;
    width: calc(100% - 60px);
    .content {
      width: 100%;
      textarea {
        width: 100%;
        padding: 10px;
        outline: none;
      }
    }
    .img-list {
      display: flex;
      align-items: center;
      width: 100%;
      overflow-x: scroll;
      margin: 0 0 10px 0;
      & > li {
        margin: 0 10px 0 0;
        .img-container {
          width: 260px;
          height: 290px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          .edit {
            position: absolute;
            left: 0;
            top: 0;
            background-color: #4c4f52;
            color: #fff;
            transform: translate(5px, 5px);
            padding: 5px 16px;
            font-size: 14px;
            border-radius: 18px;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
              background-color: #5d6063;
            }
          }
          .delete {
            position: absolute;
            left: 100%;
            top: 0;
            transform: translate(-35px, 5px);
            background-color: #4c4f52;
            color: #fff;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            &:hover {
              background-color: #5d6063;
            }
          }
        }
      }
    }
    .at {
      cursor: pointer;
      color: #4a99e9;
      font-size: 14px;
      font-weight: bold;
      padding: 5px 10px;
      &:hover {
        background-color: #edf5fd;
      }
    }
    .controller {
      display: flex;
      justify-content: space-between;
      .left {
        color: rgb(29, 155, 240);
        width: 40px;
        height: 40px;
        overflow: hidden;
        position: relative;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 50%;
        transition: all 0.3s;
        input {
          opacity: 0;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          height: 100%;
          cursor: pointer;
        }
        &:hover {
          background-color: #edf5fd;
        }
      }
      .right {
        .btn {
          outline: none;
          border: none;
          background-color: #4a99e9;
          color: #fff;
          padding: 8px 20px;
          font-size: 15px;
          font-weight: bold;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            background-color: #428ad2;
          }
        }
      }
    }
  }
}
</style>
