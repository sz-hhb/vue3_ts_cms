import { reactive } from "vue";
import type { FormRules } from "element-plus";

export const rules = reactive<FormRules>({
  userName: [
    {
      required: true,
      message: "Please input name",
      trigger: "blur",
    },
    {
      min: 5,
      max: 10,
      message: "Length should be 5 to 10",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input password",
      trigger: "blur",
    },
    { min: 6, max: 8, message: "Length should be 6 to 8", trigger: "blur" },
  ],
});
