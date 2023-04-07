<template>
  <div class="nav-header">
    <div class="collapse-icon" @click="collapseBtnClick">
      <el-icon v-if="isCollapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineEmits } from "vue";

export default defineComponent({
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
  height: 100%;

  .collapse-icon {
    height: 100%;
    cursor: pointer;

    .el-icon {
      height: 48px;
      font-size: 28px;
    }
  }
}
</style>
