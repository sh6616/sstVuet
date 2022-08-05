<template>
  <div class="nav-wrap fl">
    <div class="Logo">
      <div id="LogoImg">
        <img src="../../../assets/logo.png" />
      </div>
      <h1 id="title">税务人脸管理系统</h1>
    </div>
    <el-menu
      :default-active="this.$route.fullPath"
      class="el-menu-vertical-demo"
      :collapse="isOpen"
      :unique-opened="true"
      router
      background-color="#344a5f"
      text-color="#fff"
      active-text-color="#fff"
    >
      <template v-for="(item, index) in routers">
        <el-submenu v-if="item.hidden" :key="item.id" :index="index+''">
          <!-- 一级菜单 -->
          <template slot="title">
            <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon" />
            <span slot="title">{{item.meta.name}}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            :index="subItem.path"
          >{{subItem.meta.name}}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      routers: []
    };
  },
  created() {
    this.routers = this.$root.$router.options.routes;
  },
  computed: {
    isOpen: function() {
      return this.$store.state.isCollapse;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
.nav-wrap {
  background-color: #344a5f;
  @include webkit(transition, all 0.3s ease 0s);
  .el-menu {
    border-right: none;
  }
  .el-menu-item,
  .el-submenu__title {
    height: 45px;
    line-height: 45px;
  }
  .el-menu-item {
    height: 40px;
    line-height: 40px;
  }
}
.open {
  .nav-wrap {
    width: $navMenu;
    height: 100vh;
    min-height: 711px;
    @include webkit(transition, all 0.3s ease 0s);
    background-color: #344a5f;
    .Logo {
      #LogoImg {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 92px;
          height: 92px;
        }
      }
      h1 {
        text-align: center;
        color: white;
        font-size: 20px;
      }
    }
  }
}
.close {
  .nav-wrap {
    width: 5%;
    height: 100vh;
    min-height: 711px;
    @include webkit(transition, all 0.3s ease 0s);
    background-color: #344a5f;
    .Logo {
      #LogoImg {
        width: 79px;
        height: 79px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 39px;
          height: 39px;
        }
      }
      h1 {
        text-align: center;
        color: white;
        font-size: 16px;
      }
    }
  }
}
</style>
