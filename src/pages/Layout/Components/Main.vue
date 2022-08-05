<template>
  <div class="main-wrap fl">
    <div class="main-shadow">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
.open {
  .main-wrap {
    width: $mainMenu;
    height: 90vh;
    min-height: 640px;
    background-color: WhiteSmoke;
    overflow: hidden;
    box-sizing: border-box;
    padding: 20px 0 0 20px;
    .main-shadow {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 20px 0 0 20px;
      background-color: white;
    }
  }
}
.close {
  .main-wrap {
    width: $mainMenuMin;
    height: 90vh;
    min-height: 640px;
    background-color: WhiteSmoke;
    overflow: hidden;
    box-sizing: border-box;
    padding: 20px 0 0 20px;
    .main-shadow {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 20px 0 0 20px;
      background-color: white;
    }
  }
}
</style>
