<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "svgIcon",

  data() {
    return {
      msg: "4444444"
    };
  },
  props: {
    // 分页
    iconClass: {
      type: String, // 定义接收的值类型
      default: ""
    },
    className: {
      type: String,
      default: ""
    }
  },
  created() {
    // console.log(this.$props.iconClass);
    // console.log(this.$props.className);
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
}
</style>
