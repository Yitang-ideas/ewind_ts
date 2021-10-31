import { createRouter, createWebHistory } from "vue-router";
// import { defineAsyncComponent } from "vue";
import UserAuth from "../views/auth/UserAuth.vue";
// import RecordList from "../views/records/RecordList.vue";
// import RecordDetail from "../views/records/RecordDetail.vue";
import UploadWords from "../views/upload/UploadWords.vue";
import IntentionWords from "../views/inspection/IntentionWords.vue";
import SelfWords from "../views/inspection/SelfWords.vue";
import SensitiveWords from "../views/inspection/SensitiveWords.vue";
import IntentionAnalysis from "../views/analysis/IntentionAnalysis.vue";
import SensitiveAnalysis from "../views/analysis/SensitiveAnalysis.vue";
import BalanceQuery from "../views/query/BalanceQuery.vue";
import KeyManage from "../views/manage/KeyManage.vue";
import UserManage from "../views/manage/UserManage.vue";
import TaskManage from "../views/manage/TaskManage.vue";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

import store from "../store";

// const Home = defineAsyncComponent(() => import("../views/Home.vue"));
// const UploadWords = defineAsyncComponent(() =>
//   import("../views/upload/UploadWords.vue")
// );

const routes = [
  {
    path: "/",
    component: Home,
    meta: { requireAuth: true, isHome: true, withHead: true }
  },
  {
    path: "/upload/words",
    component: UploadWords,
    name: "禁词上传",
    meta: { requireAuth: true, isHome: false, withHead: true }
  },
  {
    path: "/inspection/intention",
    component: IntentionWords,
    name: "意向词质检",
    meta: { requireAuth: true, isHome: false, withHead: true }
  },
  {
    path: "/inspection/self",
    component: SelfWords,
    name: "自定义质检",
    meta: { requireAuth: true, isHome: false, withHead: true }
  },
  {
    path: "/inspection/sensitive",
    component: SensitiveWords,
    name: "敏感词质检",
    meta: { requireAuth: true, isHome: false, withHead: true }
  },
  {
    path: "/analysis/intention",
    component: IntentionAnalysis,
    name: "意向词分析",
    meta: { requireAuth: true, isHome: false, withHead: true }
  },
  {
    path: "/analysis/sensitive",
    component: SensitiveAnalysis,
    name: "敏感词分析",
    meta: { requireAuth: true, isHome: false, withHead: true }
  },
  {
    path: "/query/balance",
    component: BalanceQuery,
    name: "余额查询",
    meta: { requireAuth: true, isHome: false, withHead: true }
  },
  {
    path: "/manage/user",
    component: UserManage,
    name: "用户管理",
    meta: { requireAuth: true, isHome: false, withHead: true }
  },
  {
    path: "/manage/task",
    component: TaskManage,
    name: "任务管理",
    meta: { requireAuth: true, isHome: false, withHead: true }
  },
  {
    path: "/manage/key",
    component: KeyManage,
    name: "密匙管理",
    meta: { requireAuth: true, isHome: false, withHead: true }
  },
  {
    path: "/auth",
    name: "auth",
    component: UserAuth,
    meta: { requireUnAuth: true }
  },
  {
    path: "/:notFound(.*)",
    name: "notFound",
    component: NotFound,
    meta: { withHead: true }
  }
  // {
  //   path: "/records",
  //   name: "records",
  //   component: RecordList,
  //   meta: { requireAuth: true }
  // },
  // {
  //   path: "/records/:id",
  //   component: RecordDetail,
  //   props: true,
  //   // children:[
  //   //   {path: 'info',component:Info}  // /records/1/info
  //   // ]
  //   meta: { requireAuth: true }
  // }
  // {
  //   path: "/:notFound(.*)",
  //   name: "notFound",
  //   component: NotFound
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(function(to, from, next) {
  if (to.meta.requireAuth && !store.getters["auth/isAuthenticated"]) {
    next("/auth");
  } else if (to.meta.requireUnAuth && store.getters["auth/isAuthenticated"]) {
    next("/");
  } else {
    next();
  }
});

export default router;
