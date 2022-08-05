<template>
  <div id="Layout" :class="menuStatus ? 'close' : 'open'">
      <Nav></Nav>
      <Head></Head>
      <Main></Main>
  </div>
</template> 

<script>
import Nav from "./Components/Nav";
import Head from "./Components/Head";
import Main from "./Components/Main";
export default {
  name: "Layout",
  components: { Nav, Head, Main },
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    menuStatus() {
      return this.$store.state.isCollapse;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/config.scss";
#Layout {
  min-height: 300px;
  min-width: 1350px;
}
</style>
