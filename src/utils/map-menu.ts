import { RouteRecordRaw } from "vue-router";

export function mapMenuToRoutes(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  // 先默认加载所有routes
  const allRoutes: RouteRecordRaw[] = [];

  // 递归获取router/main下的ts文件
  const routeFiles = require.context("../router/main", true, /\.ts/);

  // routeFiles.keys()是一个数组，值为ts文件的相对路径
  routeFiles.keys().forEach((item) => {
    const route = require("../router/main" + item.split(".")[1]);
    allRoutes.push(route.default);
  });

  // 根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) routes.push(route);
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };

  _recurseGetRoute(userMenu);

  return routes;
}
