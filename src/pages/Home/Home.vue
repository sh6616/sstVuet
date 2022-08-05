<template>
  <div class="home-wrap">
    <div class="introduce">
      <h1 class="home-title">大为人脸税务后台管理系统介绍</h1>
      <ul>
        <li><a>功能介绍</a></li>
        <li><a>闸机与门禁管理</a></li>
        <li><a>人脸识别与检索</a></li>
        <li><a>高点实时抓拍预览</a></li>
        <li><a>摄像头管理</a></li>
        <li><a>行为轨迹追踪</a></li>
        <li><a>区域人数统计与热力图</a></li>
        <li><a>企业画像查看</a></li>
        <li><a>抓拍与终端对比管理</a></li>
        <li><a>技术支持联系方式</a></li>
        <li><a>技术联系人:******&nbsp&nbsp&nbsp联系方式:*********</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.home-wrap {
  position: relative;
  .introduce {
    width: 500px;
    height: 500px;
    border: 1px solid black;
    position: absolute;
    left: 50%;
    margin-left: -250px;
    border-radius: 2%;
    overflow: hidden;
    .home-title {
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      background-color: WhiteSmoke;
    }
    ul { 
      border: 1px solid transparent;
      margin-top: 15px;
      li {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin-top: 7px;
      }
    }
  }
}
</style>
