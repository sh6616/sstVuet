webpackJsonp([5],{"0oLz":function(t,s){},"F/pk":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r={data:function(){var t=/^[a-zA-Z0-9_-]{4,16}$/,s=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;return{ruleForm:{account:"",password:""},rules:{account:[{validator:function(s,i,r){""===i?r(new Error("请输入用户名")):(t.test(i)||r(new Error("账号应是6-12位数字、字母或字符！")),r())},trigger:"blur"}],password:[{validator:function(t,i,r){""===i?r(new Error("请输入密码")):s.test(i)?r():r(new Error("密码至少包含 数字和英文，长度6-20"))},trigger:"blur"}]}}},methods:{submitForm:function(t){var s=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;alert("submit!"),s.$router.replace("/console")})}}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"Login"},[i("div",{staticClass:"Box"},[i("el-row",[i("el-col",{attrs:{span:10}},[i("div",{staticClass:"grid-content GridLf"},[i("h3",[t._v("欢迎使用大为税务人脸后台管理系统")]),t._v(" "),i("ul",[i("li",[i("svg",{staticClass:"icon",attrs:{t:"1591754385671",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1696",width:"16",height:"16"}},[i("path",{attrs:{d:"M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0","p-id":"1697",fill:"#ffffff"}})]),t._v("闸机与门禁管理\n            ")]),t._v(" "),i("li",[i("svg",{staticClass:"icon",attrs:{t:"1591754385671",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1696",width:"16",height:"16"}},[i("path",{attrs:{d:"M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0","p-id":"1697",fill:"#ffffff"}})]),t._v("人脸识别与检索\n            ")]),t._v(" "),i("li",[i("svg",{staticClass:"icon",attrs:{t:"1591754385671",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1696",width:"16",height:"16"}},[i("path",{attrs:{d:"M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0","p-id":"1697",fill:"#ffffff"}})]),t._v("高点实时抓拍预览\n            ")]),t._v(" "),i("li",[i("svg",{staticClass:"icon",attrs:{t:"1591754385671",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1696",width:"16",height:"16"}},[i("path",{attrs:{d:"M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0","p-id":"1697",fill:"#ffffff"}})]),t._v("摄像头管理\n            ")]),t._v(" "),i("li",[i("svg",{staticClass:"icon",attrs:{t:"1591754385671",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1696",width:"16",height:"16"}},[i("path",{attrs:{d:"M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0","p-id":"1697",fill:"#ffffff"}})]),t._v("行为轨迹追踪\n            ")]),t._v(" "),i("li",[i("svg",{staticClass:"icon",attrs:{t:"1591754385671",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1696",width:"16",height:"16"}},[i("path",{attrs:{d:"M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0","p-id":"1697",fill:"#ffffff"}})]),t._v("区域人数统计与热力图\n            ")]),t._v(" "),i("li",[i("svg",{staticClass:"icon",attrs:{t:"1591754385671",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1696",width:"16",height:"16"}},[i("path",{attrs:{d:"M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0","p-id":"1697",fill:"#ffffff"}})]),t._v("企业画像查看\n            ")]),t._v(" "),i("li",[i("svg",{staticClass:"icon",attrs:{t:"1591754385671",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1696",width:"16",height:"16"}},[i("path",{attrs:{d:"M263.10883555 897.96941748c0 45.9613677 60.71424948 72.06411378 94.18372742 38.58492682l385.83470458-385.82985008c22.1305363-22.12932267 22.1305363-55.03931733 0-77.16985363L357.29256297 87.73449955c-34.32751408-34.33722311-94.18372741-5.67007763-94.18372742 39.15411912v771.08079881z m0 0","p-id":"1697",fill:"#ffffff"}})]),t._v("抓拍与终端对比管理\n            ")])])])]),t._v(" "),i("el-col",{attrs:{span:14}},[i("div",{staticClass:"grid-content GridRi"},[i("h1",[t._v("管理员登录")]),t._v(" "),i("div",{staticClass:"GridRi_Bt"},[i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"status-icon":"",rules:t.rules}},[i("el-form-item",{staticStyle:{color:"'white'","font-size":"20px"},attrs:{label:"账号",prop:"account"}},[i("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:t.ruleForm.account,callback:function(s){t.$set(t.ruleForm,"account",s)},expression:"ruleForm.account"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"密码",prop:"password"}},[i("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.password,callback:function(s){t.$set(t.ruleForm,"password",s)},expression:"ruleForm.password"}})],1),t._v(" "),i("el-form-item",[i("el-button",{staticClass:"Bt",attrs:{type:"primary"},on:{click:function(s){return t.submitForm("ruleForm")}}},[t._v("提交")])],1)],1)],1)])]),t._v(" "),i("div",{staticClass:"BoxBt"},[t._v("© Copyright 2019 北京大为远达科技有限公司")])],1)],1)])},staticRenderFns:[]};var e=i("VU/8")(r,o,!1,function(t){i("0oLz")},"data-v-5c5516ce",null);s.default=e.exports}});
//# sourceMappingURL=5.4bf2669bcc3cd7864219.js.map