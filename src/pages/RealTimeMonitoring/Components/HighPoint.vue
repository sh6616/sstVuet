<template>
  <div class="HighPoint">
    <el-row>
      <el-col :span="15">
        <div class="grid-content bg-purple">
          <span class="fl" style="line-height:36px;text-align:center;margin-left:25px">实时监控</span>
          <el-select v-model="value" placeholder="请选择" class="ri select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <button class="ri" style="margin-right:20px;margin-top:8px">关闭预览</button>
        </div>
      </el-col>
      <el-col :span="8" style="margin-left:15px">
        <div class="grid-content bg-purple-light" style="height:36px;line-height:36px">
          <div
            style="line-height: 40px;height: 40px;width: 90px;text-align: center;margin-left: 25px;"
          >对比照片</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="15" class="">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8" class="" style="margin-left: 20px">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "HighPoint",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.HighPoint {
  .el-row {
    margin-bottom: 10px;
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
    min-height: 40px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .select {
    width: 200px;
  }
  .businesReach {
    height: 549px;
    background-color: red;
    margin-top: 0;
  }
}
</style>
