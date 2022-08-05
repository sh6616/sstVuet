<template>
  <div class="Login">
    <div class="Box">
      <el-row>
        <!-- 左边 后台动能介绍 开始-->
        <el-col :span="10">
          <div class="grid-content GridLf">
            <h3>欢迎使用大为税务人脸后台管理系统</h3>
            <ul>
              <li>
                <svg
                  t="1591754385671"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1696"
                  width="16"
                  height="16"
                >
                  <path
                    d="M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0"
                    p-id="1697"
                    fill="#ffffff"
                  />
                </svg>闸机与门禁管理
              </li>
              <li>
                <svg
                  t="1591754385671"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1696"
                  width="16"
                  height="16"
                >
                  <path
                    d="M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0"
                    p-id="1697"
                    fill="#ffffff"
                  />
                </svg>人脸识别与检索
              </li>
              <li>
                <svg
                  t="1591754385671"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1696"
                  width="16"
                  height="16"
                >
                  <path
                    d="M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0"
                    p-id="1697"
                    fill="#ffffff"
                  />
                </svg>高点实时抓拍预览
              </li>
              <li>
                <svg
                  t="1591754385671"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1696"
                  width="16"
                  height="16"
                >
                  <path
                    d="M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0"
                    p-id="1697"
                    fill="#ffffff"
                  />
                </svg>摄像头管理
              </li>
              <li>
                <svg
                  t="1591754385671"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1696"
                  width="16"
                  height="16"
                >
                  <path
                    d="M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0"
                    p-id="1697"
                    fill="#ffffff"
                  />
                </svg>行为轨迹追踪
              </li>
              <li>
                <svg
                  t="1591754385671"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1696"
                  width="16"
                  height="16"
                >
                  <path
                    d="M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0"
                    p-id="1697"
                    fill="#ffffff"
                  />
                </svg>区域人数统计与热力图
              </li>
              <li>
                <svg
                  t="1591754385671"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1696"
                  width="16"
                  height="16"
                >
                  <path
                    d="M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0"
                    p-id="1697"
                    fill="#ffffff"
                  />
                </svg>企业画像查看
              </li>
              <li>
                <svg
                  t="1591754385671"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1696"
                  width="16"
                  height="16"
                >
                  <path
                    d="M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0"
                    p-id="1697"
                    fill="#ffffff"
                  />
                </svg>抓拍与终端对比管理
              </li>
            </ul>
          </div>
        </el-col>
        <!-- 左边 后台动能 结束-->
        <!-- 右边  登录框 开始-->
        <el-col :span="14">
          <div class="grid-content GridRi">
            <h1>管理员登录</h1>
            <div class="GridRi_Bt">
              <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                class="demo-ruleForm"
              >
                <el-form-item label="账号" prop="account" style="color: 'white';font-size: 20px;">
                  <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')" class="Bt">提交</el-button>
                  <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
        <!-- 右边  登录框结束 开始-->
        <!-- 底部 开始-->
        <div class="BoxBt">© Copyright 2019 </div>
        <!-- 底部 结束-->
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let regAccount = /^[a-zA-Z0-9_-]{4,16}$/;
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
          callback(new Error("请输入用户名"));
      } else {
        if (!regAccount.test(value)) {
          callback(new Error('账号应是6-12位数字、字母或字符！'))
        }
        callback();
      }
    };
    let regPassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else 
        if (!regPassword.test(value)) {
          callback(new Error("密码至少包含 数字和英文，长度6-20"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        account: "",
        password: ""
      },
      rules: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {  
          this.$router.replace('/console')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.Login {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-image: url(../../assets/images/backg-w-4.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .Box {
    width: 60%;
    min-width: 912px;
    height: 600px;
    min-width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -300px;
    margin-left: -30%;
    .el-row {
      margin-bottom: 20px;
      height: 100%;
      &:last-child {
        margin-bottom: 0;
      }
      .BoxBt {
        border-top: 1px solid white;
        position: absolute;
        width: 100%;
        top: 93%;
        height: 40px;
        line-height: 40px;
        color: white;
      }
    }
    .el-col {
      border-radius: 4px;
      height: 90%;
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
      height: 100%;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
    .GridLf {
      overflow: hidden;
      color: white;
      h3 {
        font-size: 24px;
        margin-top: 15%;
        text-align: center;
      }
      ul {
        margin-top: 12%;
        font-size: 20px;
        text-align: center;
        li {
          text-align: left;
          margin-top: 8%;
        }
      }
    }
    // 右边  登录框开始
    .GridRi {
      overflow: hidden;
      color: white;
      h1 {
        margin-top: 10.5%;
        font-size: 24px;
        text-align: center;
      }

      .GridRi_Bt {
        width: 85%;
        margin: 0 auto;
        .demo-ruleForm {
          margin-top: 14%;
          .Bt {
            width: 100%;
            margin-top: 5%;
          }
        }
      }
    }
  }
}
</style>
