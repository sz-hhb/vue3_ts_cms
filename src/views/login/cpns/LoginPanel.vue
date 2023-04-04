<template>
  <div class="login-panel" :class="{ active: true }" :style="{ color: 'red' }">
    <h1>后台管理系统</h1>
    <el-tabs v-model="currentTab" type="border-card" class="login-tabs" stretch>
      <el-tab-pane name="account">
        <template #label>
          <el-icon><User /></el-icon>
          <span>账号登录</span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <el-icon><Iphone /></el-icon>
          <span>手机登录</span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword" label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="login-button">
      <el-button type="primary" @click="handleLogin">立即登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import LoginAccount from "./LoginAccount.vue";
import LoginPhone from "./LoginPhone.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone,
  },
  setup() {
    const isKeepPassword = ref(true);
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const phoneRef = ref<InstanceType<typeof LoginPhone>>();
    const currentTab = ref<string>("account");

    const handleLogin = () => {
      if (currentTab.value === "account") {
        accountRef.value?.submitAccountLogin(isKeepPassword.value);
      } else {
        console.log("phoneRef", phoneRef.value);
      }
    };

    return { isKeepPassword, currentTab, handleLogin, accountRef, phoneRef };
  },
});
</script>

<style scoped lang="less">
.login {
  &-panel {
    width: 320px;
    margin-bottom: 140px;

    h1 {
      text-align: center;
    }

    .account-control {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &-button {
    .el-button {
      width: 100%;
      height: 40px;
    }
  }
}

:deep(.el-tabs) {
  .el-tabs__item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}
</style>
