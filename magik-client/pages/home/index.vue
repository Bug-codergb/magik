<template>
  <div class="home-container">
    <div class="center-container"> 
      <div class="nav-list">
        <NavBar/>
      </div>
      <div class="content">
        <div class="header">
          <div class="left-header"></div>
          <div class="right-header"></div>
        </div>
        <el-scrollbar>
          <div class="body">
            <div class="left-body">1</div>
             <div class="right-body">2</div>
        </div>
        </el-scrollbar>
        
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.home-container{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .center-container{
    width: 87%;
    height: 100%;
  
    display: flex;
    align-items: flex-start;
    .nav-list{
      width: 275px;
      height: 100%;
      border-right: 1px solid #f0f3f4;
    }
    .content{
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
      .el-scrollbar{
        height: 100%;
      }
    }
    .header{
      height: 53px;
      display: flex;
      align-items: flex-start;
      .left-header{
        width: 598px;
        height: 100%;
        border-right: 1px solid #f0f3f4;
      }
      .right-header{
        flex: 1;
        height: 100%;
      }
    }
    .body{
      background-color: skyblue;
      flex: 1;
      display: flex;
      align-items: flex-start;
      height: 1000px;
      .left-body{
        border-right: 1px solid #f0f3f4;
        width: 598px;
        height: 100%;
      }
      .right-body{
        flex: 1;
        height: 100%;
      }
    }
  }
}
</style>