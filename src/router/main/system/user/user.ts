const user = () => import("@/views/main/system/user/UserPage.vue");
export default {
  path: "/main/system/user",
  name: "user",
  component: user,
  children: [],
};
