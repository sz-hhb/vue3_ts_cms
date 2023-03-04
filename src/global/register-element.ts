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
} from "element-plus/lib/index";

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
];

export default function registerElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn);
  }
}
