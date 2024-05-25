<template>
  <div class="publish-container">
    <div class="left-container">
      <img :src="user.avatarUrl"/>
    </div>
    <div class="right-container">
      <div class="content">
        <textarea v-model="formData.content" rows="3" cols="4" type="textarea" placeholder="有什么新鲜事"/>
      </div>
      <div class="at">所有人可以回复</div>
      <div class="controller">
        <div class="left">
          <Media/>
        </div>
        <div class="right">
          <button class="btn">发帖</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Media from "~/assets/svg/media";
const user = useUserMsg();
const formData = reactive({
  content:""
})
</script>
<style scoped lang="less">
  .publish-container{
    display: flex;
    align-items: flex-start;
    .left-container{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .right-container{
      margin: 0 0 0 10px;
      flex:1;
      .content{
        width: 100%;
        textarea{
          width: 100%;
          padding: 10px;
          outline: none;
        }
      }
      .at{
        cursor: pointer;
        color: #4a99e9;
        font-size: 14px;
        font-weight: bold;
        padding: 5px 10px;
        &:hover{
          background-color: #edf5fd;
        }
      }
      .controller{
        display: flex;
        justify-content: space-between;
        .left{
          color: rgb(29, 155, 240);
        } 
        .right{
          .btn{
            outline: none;
            border: none;
            background-color: #4a99e9;
            color: #fff
          }  
        } 
      }
    }
  }
</style>