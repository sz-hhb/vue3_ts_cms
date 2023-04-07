<template>
  <div class="main-wrapper">
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '210px'"
        ><nav-menu :collapse="isCollapse"></nav-menu
      ></el-aside>
      <el-container>
        <el-header>
          <nav-header @collapse-btn-click="collapseBtnClick"></nav-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavMenu from "@/components/nav-menu";
import NavHeader from "@/components/nav-header";

export default defineComponent({
  components: {
    NavMenu,
    NavHeader,
  },
  setup() {
    const isCollapse = ref(false);

    const collapseBtnClick = (value: boolean) => {
      isCollapse.value = value;
    };

    return { isCollapse, collapseBtnClick };
  },
});
</script>

<style scoped lang="less">
.main-wrapper {
  width: 100%;
  height: 100%;

  .el-container {
    height: 100%;
  }

  .el-aside {
    height: 100%;
    background-color: #001529;
    overflow-x: hidden;
    transition: all 0.5s ease-in-out;
  }

  .el-header {
    height: 48px;
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
