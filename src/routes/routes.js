import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import MainPage from '@/views/Pages/MainPage.vue'

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path :'/',
    redirect : '/home'


  },
  {
    path: '/dashboard',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: '실시간 좌석 정보',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/mislaid',
        name: 'mislaid',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Mislaid.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/maps',
        name: 'maps',
        component: () => import(/* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
      },
      {
        path: '/noticeBoard',
        name: 'noticeBoard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/NoticeBoard.vue')
      },
      {
        path: '/noticeDetail/:notice_id',
        name: 'noticeDetail',
        component: () => import(/* webpackChunkName: "demo" */ '../views/NoticeDetail.vue')
      },
      {
        path: '/noticeCreate',
        name: 'noticeCreate',
        component: () => import(/* webpackChunkName: "demo" */ '../views/NoticeCreate.vue')
      },
      {
        path: '/noticeEdit/:notice_id',
        name: 'noticeEdit',
        component: () => import(/* webpackChunkName: "demo" */ '../views/NoticeEdit.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      },
      {
          path: '/admin',
          name: '관리자 좌석배치',
          component: () => import('../views/DashboardAdmin.vue')


      }
    ]
  },
  {
    path: '/login',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      {
        path : '/home',
        name : 'home',
        component :() => import('../views/Pages/MainPage.vue')


      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
