import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../views/HomeView.vue") },
    {
      // /customer-rent/:branchId/:customerRentRoomId?name=...
      path: "/customer-rent/:branchId/:customerRentRoomId",
      component: () => import("../views/CustomerRentDetail.vue"),
      props: (route) => ({
        branchId: Number(route.params.branchId),
        customerRentRoomId: Number(route.params.customerRentRoomId),
        customerName: String(route.query.name ?? ""),
      }),
    },
  ],
});
