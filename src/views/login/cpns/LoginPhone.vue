<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="手机号" prop="number">
        <el-input v-model="ruleForm.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import type { FormInstance } from "element-plus";
import { rules } from "../config/account-config";

export default defineComponent({
  setup() {
    const ruleFormRef = ref<FormInstance>();
    const ruleForm = reactive({
      num: "",
      code: "",
    });

    return { ruleFormRef, ruleForm, rules };
  },
});
</script>

<style scoped></style>
