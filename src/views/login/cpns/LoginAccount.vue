<template>
  <div class="login-account">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="账号" prop="userName">
        <el-input v-model="ruleForm.userName" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import type { FormInstance } from "element-plus";
import { rules } from "../config/account-config";
import localCache from "@/utils/cache";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const ruleFormRef = ref<FormInstance>();
    const ruleForm = reactive({
      userName: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? "",
    });

    const submitAccountLogin = (isKeepPassword: boolean) => {
      ruleFormRef.value?.validate((valid, fields) => {
        if (valid) {
          if (isKeepPassword) {
            localCache.setCache("name", ruleForm.userName);
            localCache.setCache("password", ruleForm.password);
          } else {
            localCache.removeCache("name");
            localCache.removeCache("password");
          }

          store.dispatch("login/accountLoginAction", {
            name: ruleForm.userName,
            password: ruleForm.password,
          });
        } else {
          console.log("error submit!", fields);
        }
      });
    };

    return { ruleFormRef, ruleForm, rules, submitAccountLogin };
  },
});
</script>

<style scoped></style>
