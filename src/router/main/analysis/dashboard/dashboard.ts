const dashboard = () =>
  import("@/views/main/analysis/dashboard/DashboardPage.vue");
export default {
  path: "/main/analysis/dashboard",
  name: "dashboard",
  component: dashboard,
  children: [],
};
