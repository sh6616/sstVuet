<template>
  <div class="head-wrap fl">
    <div v-on:click="change" class="fl">
      <svg-icon iconClass="caidan" class="caidan" />
    </div>
    <div class="ri" v-on:click="close">
      <svg-icon iconClass="close" class="close" />
    </div>
    <div class="ri" style="height: 100%;border-right: 1px solid #ededed;margin-right: 2rem">
      <svg-icon iconClass="photo" class="photo fl" />
      <h1 class="fl" style="margin-top: 1.6rem;margin-right: 2rem">管理员</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      routers: []
    };
  },
  methods: {
    change() {
      this.$store.commit("SET_COLLAPSE");
    },
    close(){
      this.$router.replace('/')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";

.open {
  .head-wrap {
    width: $headMenu;
    height: 10vh;
    min-height: 71px;
    -moz-box-shadow: 2px 1px 5px #909090;
    -webkit-box-shadow: 2px 1px 5px #909090;
    box-shadow: 2px 1px 5px #909090;
    .caidan {
      width: 2rem;
      height: 2rem;
      margin-top: 1.2rem;
      margin-left: 1.2rem;
    }
    .close {
      width: 2rem;
      height: 2rem;
      margin-top: 1.2rem;
      margin-right: 2rem;
    }
    .photo {
      width: 2rem;
      height: 2rem;
      margin-top: 1.2rem;
      margin-right: 1.4rem;
    }
  }
}
.close {
  .head-wrap {
    width: $headMenuMin;
    height: 10vh;
    min-height: 71px;
    -moz-box-shadow: 2px 1px 5px #909090;
    -webkit-box-shadow: 2px 1px 5px #909090;
    box-shadow: 2px 1px 5px #909090;
  }
  .caidan {
    width: 2rem;
    height: 2rem;
    margin-top: 1.2rem;
    margin-left: 1.2rem;
  }
  .close {
    width: 2rem;
    height: 2rem;
    margin-top: 1.2rem;
    margin-right: 2rem;
  }
  .photo {
    width: 2rem;
    height: 2rem;
    margin-top: 1.2rem;
    margin-right: 1.4rem;
  }
}
</style>
