<template>
  <div class="nav-header">
    <div class="collapse-icon" @click="collapseBtnClick">
      <el-icon v-if="isCollapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </div>
    <div class="content">
      <div>面包屑</div>
      <user-info-drop-down />
    </div>
  </div>
</template>

<script lang="ts">
import UserInfoDropDown from "./user-info-drop-down.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    UserInfoDropDown,
  },
  emits: ["collapse-btn-click"],
  setup(props, { emit }) {
    const isCollapse = ref(false);
    const collapseBtnClick = () => {
      isCollapse.value = !isCollapse.value;
      emit("collapse-btn-click", isCollapse.value);
    };

    return { isCollapse, collapseBtnClick };
  },
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;

  .collapse-icon {
    height: 100%;
    cursor: pointer;

    .el-icon {
      height: 48px;
      font-size: 28px;
    }
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
