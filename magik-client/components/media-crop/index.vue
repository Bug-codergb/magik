<template>
  <div class="media-crop-container">
    <el-dialog v-model="isShow" title="裁剪媒体" width="600px" top="6vh" :close-on-click-modal="false" :show-close="false">
      <template #header>
        <div class="controller">
          <div class="left">
            <div class="back" @click="handleCancel">
              <el-icon><Back /></el-icon>
            </div>
            <div class="title">裁剪媒体</div>
          </div>
          <div class="right">
            <div class="back" @click="handlePrev">
              <el-icon><Back /></el-icon>
            </div>
            <div class="back" @click="handleNext">
              <el-icon><Right /></el-icon>
            </div>
            <div class="save" @click="handleSave">保存</div>
          </div>
        </div>
      </template>
      <div>
        <el-tabs v-model="activeTab" class="demo-tabs" :stretch="true" @tab-change="handleTabChange">
          <el-tab-pane label="User" name="first">
            <template #label>
              <el-icon><Crop /></el-icon>
            </template>
            <div class="img-container">
              <template v-if="mediaList.length !== 0">
                <div class="container">
                  <img :src="mediaList[currentMediaIndex].url" ref="imgRef" />
                </div>
              </template>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Config" name="second">
            <template #label>
              <span>ALT</span>
            </template>
            <div class="img-container">
              <div class="container">
                <img :src="staticImgURL" />
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Role" name="third">
            <template #label>
              <el-icon><CollectionTag /></el-icon>
            </template>
            <div class="img-container">
              <div class="container">
                <img :src="staticImgURL" />
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <template #footer>
        <div class="footer-container">
          <template v-if="activeTab === 'first'">
            <div class="left">
              <div class="circle" title="原始" :class="{ active: activeIndex === 0 }" @click="handleScaleChange(0)">
                <div class="original"></div>
              </div>
              <div class="circle" title="比例" :class="{ active: activeIndex === 1 }" @click="handleScaleChange(1)">
                <div class="scale"></div>
              </div>
              <div class="circle" title="正方形" :class="{ active: activeIndex === 2 }" @click="handleScaleChange(2)">
                <div class="rect"></div>
              </div>
            </div>
            <div class="right">
              <el-slider v-model="scale" :min="1" :max="2" :step="0.01" :show-tooltip="false" @input="handleSliderInput" />
            </div>
          </template>
          <template v-if="activeTab === 'second'">
            <el-input
              type="textarea"
              placeholder="请输入图片描述，让大家更好理解您的图片"
              :model-value="imgDesc"
              @input="handleImgDesc"
            />
          </template>
          <template v-if="activeTab === 'third'">
            <div>
              <h3>在这个帖子上添加内容警告</h3>
              <p>选择一个类别，我们将在这个帖子上添加一个内容警告。这将有利于避免看到自己不想看到的内容</p>
              <ul class="checkbox-list">
                <li v-for="(item, index) in mediaList[currentMediaIndex].warn" :key="item.value">
                  <div class="label">{{ item.value }}</div>
                  <div class="right-content">
                    <input
                      :value="item.value"
                      :checked="item.checked"
                      type="checkbox"
                      @change="e => handleWarnChange(e, item, index)"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import Cropper from "cropperjs";
import { Back, Right, Crop, CollectionTag } from "@element-plus/icons-vue";
import type { IMedia, IWarn } from "~/interface/media";
import type { R } from "~/interface/R";
const emit = defineEmits<(e: "success", mediaList: IMedia[]) => void>();
const activeTab = ref("first");

const isShow = ref(false);
const mediaList = ref<IMedia[]>([]);
const imgRef = ref<HTMLImageElement | null>(null);
const currentMediaIndex = ref(0);
const showDialog = (fileList: IMedia[], index: number = 0): void => {
  cropperInstance.value = null;
  // imgRef.value = null;
  isShow.value = true;
  mediaList.value = fileList;
  currentMediaIndex.value = index;
  activeTab.value = "first";

  imgDesc.value && (imgDesc.value = mediaList.value[currentMediaIndex.value].description);
  nextTick(() => {
    initCropper();
  });
};

const handlePrev = async (): Promise<void> => {
  if (currentMediaIndex.value <= 0) {
    currentMediaIndex.value = 0;
    return;
  } else {
    currentMediaIndex.value -= 1;
  }
  cropperInstance.value?.replace(mediaList.value[currentMediaIndex.value].url);
  staticImgURL.value = mediaList.value[currentMediaIndex.value].url;
  imgDesc.value = mediaList.value[currentMediaIndex.value].description;
};
const handleNext = async (): Promise<void> => {
  if (currentMediaIndex.value >= mediaList.value.length - 1) {
    currentMediaIndex.value = mediaList.value.length - 1;
    return;
  } else {
    currentMediaIndex.value += 1;
  }
  cropperInstance.value?.replace(mediaList.value[currentMediaIndex.value].url);
  staticImgURL.value = mediaList.value[currentMediaIndex.value].url;
  imgDesc.value = mediaList.value[currentMediaIndex.value].description;
};

const handleCancel = (): void => {
  cropperInstance.value?.destroy();
  isShow.value = false;
};

const cropperInstance = ref<Cropper | null>(null);
const initCropper = (): void => {
  console.log(imgRef.value);
  imgRef.value &&
    (cropperInstance.value = new Cropper(imgRef.value, {
      ready: function () {
        console.log("ready");
      },
      dragMode: "move",
      viewMode: 1,
      aspectRatio: NaN,
      zoomOnWheel: false
    }));
};

const scale = ref(1);
const activeIndex = ref(0);
const handleScaleChange = (index: number): void => {
  activeIndex.value = index;
  cropperInstance.value?.setAspectRatio(index === 0 ? NaN : index === 1 ? 16 / 9 : 1);
};

const handleSliderInput = (e: number): void => {
  const scale = e === 0 ? 0 : e;
  cropperInstance.value?.scale(scale);
};

const handleGetCropFile = async (): Promise<Blob | null> => {
  const rawFile = mediaList.value[currentMediaIndex.value].file;
  const file: Blob | null = await getCropperFile(cropperInstance.value, 500, rawFile);
  return file;
};

const staticImgURL = ref<string>("");
const handleTabChange = async (): Promise<void> => {
  const file = await handleGetCropFile();
  const url = file && URL.createObjectURL(file);
  staticImgURL.value = url ?? "";
};

const imgDesc = ref("");
const handleImgDesc = (e: string): void => {
  imgDesc.value = e;
  mediaList.value[currentMediaIndex.value].description = e;
};
const handleWarnChange = (e: Event, item: IWarn, index: number): void => {
  const value = e.currentTarget!.value;
  const checked = e.currentTarget!.checked;
  item.checked = checked;
};

const handleSave = async (): Promise<void> => {
  try {
    const file = await handleGetCropFile();
    if (file) {
      mediaList.value[currentMediaIndex.value].file = file;
      mediaList.value[currentMediaIndex.value].url = URL.createObjectURL(file);
    }

    emit("success", mediaList.value);
    cropperInstance.value?.destroy();
    isShow.value = false;
  } catch (e) {
    console.log(e);
  }
};
defineExpose({
  showDialog
});
</script>
<style lang="less"></style>
<style lang="less" scoped>
.media-crop-container {
  .controller {
    align-items: center;

    justify-content: space-between;
    display: flex;
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
  .img-container {
    width: 100%;
    height: 460px;
    display: flex;
    background-color: #eef2f4;
    padding: 10px 0;
    justify-content: center;
    .container {
      width: 80%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .footer-container {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 40%;
      margin: 0 50px 0 0;
      .circle {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        border-radius: 50%;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background-color: #eeeff0;
        }
        &.active {
          .original,
          .scale,
          .rect {
            border-color: #4a99e9;
          }
        }
      }
      .original {
        width: 20px;
        height: 15px;
        border: 2px solid #566370;
      }
      .scale {
        width: 20px;
        height: 10px;
        border: 2px solid #566370;
      }
      .rect {
        width: 15px;
        height: 15px;
        border: 2px solid #566370;
      }
    }
    .right {
      width: 40%;
    }
    h3,
    p {
      text-align: left;
    }
    p {
      margin: 20px 0;
      font-size: 14px;
      color: #566370;
    }
    .checkbox-list {
      width: 100%;
      & > li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
      }
    }
  }
}
</style>
