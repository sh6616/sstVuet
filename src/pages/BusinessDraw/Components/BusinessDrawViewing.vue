<template>
  <div class="BusinessDrawViewing">
    <el-row>
      <el-col :span="4">
        <div class="grid-content">
          <input
            v-model="input"
            placeholder="请输入身份证号"
            class="inpt"
          />
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple" style="margin-left: 10px;line-height: 36px;text-align: center;cursor:pointer;color: white">查询</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "BusinessDrawViewing",
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.BusinessDrawViewing {
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .inpt {
    height: 29px;
    width: 202px;
  }
}
</style>
