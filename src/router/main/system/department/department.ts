const department = () =>
  import("@/views/main/system/department/DepartmentPage.vue");
export default {
  path: "/main/system/department",
  name: "department",
  component: department,
  children: [],
};
