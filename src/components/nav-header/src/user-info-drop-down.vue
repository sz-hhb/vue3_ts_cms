<template>
  <div class="user-info-drop-down">
    <el-dropdown>
      <div class="title">
        <el-avatar
          :size="20"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span> {{ userName }} </span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            ><el-icon><CircleClose /></el-icon>退出登录</el-dropdown-item
          >
          <el-dropdown-item divided>用户管理</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  setup() {
    const store = useStore();

    const userName = computed(() => {
      return store.state.login.userInfo.name;
    });

    return { userName };
  },
});
</script>

<style scoped lang="less">
.el-dropdown {
  .title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .el-tooltip__trigger:focus-visible {
    outline: unset;
  }
}
</style>
