import { App } from "vue";
import "element-plus/theme-chalk/index.css";
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElInput,
  ElFormItem,
  ElCheckbox,
  ElLink,
} from "element-plus/lib/index";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElInput,
  ElFormItem,
  ElCheckbox,
  ElLink,
];

export default function registerElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn);
  }

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}
