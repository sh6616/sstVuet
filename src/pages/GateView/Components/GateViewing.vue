<template>
  <div class="GateViewing">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-row>
            <el-col :span="8">
              <div class="grid-content">
                <h1 style="text-align:center;height:40px;line-height:40px">身份证/姓名:</h1>
              </div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content">
                <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <h1 style="text-align:center;height:40px;line-height:40px">选择开始/结束日期时间:</h1>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <div class="grid-content bg-purple-light">
                <div class="block">
                  <el-date-picker
                    v-model="value1"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2">
        <div
          class="grid-content bg-purple"
          style="text-align:center;height:40px;line-height:40px"
        >查询</div>
      </el-col>
    </el-row>
    <ul>
      <li class="fl">身份证照</li>
      <li class="fl">抓拍照片</li>
      <li class="fl">身份证照片</li>
      <li class="fl">姓名</li>
      <li class="fl">出生日期</li>
      <li class="fl">性别</li>
      <li class="fl">家庭住址</li>
      <li class="fl">民族</li>
      <li class="fl">身份证有效期</li>
      <li class="fl">闸机编号</li>
      <li class="fl">进入时间</li>
      <li class="fl">离开时间</li>
      <li class="fl">进出状态</li>
    </ul>
    <div class="findResult">
      暂无查询结果
    </div>
  </div>
</template>

<script>
export default {
  name: "GateViewing",
  data() {
    return {
      input: "",
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
    };
  }
};
</script>

<style lang="scss" scoped>
.GateViewing {
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
  ul {
    width: 100%;
    height: 32px;
    overflow: hidden;
    li {
      width: 95px;
      // border: 1px solid black;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    li:last-child {
      border-right: 1px solid black;
    }
  }
  .findResult {
      font-size: 35px;
      width: 100%;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
}
</style>
