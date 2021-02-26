import { createWebHistory, createRouter } from 'vue-router';
import ROUTE_NAMES from '@/router/constRouteNames';

const ViewHome = () => import('@/views/ViewHome.vue');
const ViewAbout = () => import('@/views/ViewAbout.vue');
const ViewQRCodeScanner = () => import('@/views/ViewQRCodeScanner.vue');
const ViewToDo = () => import('@/views/ViewToDo.vue');

const routes = [
  {
    path: '/',
    name: ROUTE_NAMES.HOME,
    component: ViewHome,
  },
  {
    path: '/about',
    name: ROUTE_NAMES.ABOUT,
    component: ViewAbout,
  },
  {
    path: '/qr-code-scanner',
    name: ROUTE_NAMES.QR_CODE_SCANNER,
    component: ViewQRCodeScanner,
  },
  {
    path: '/to-do',
    name: ROUTE_NAMES.TO_DO,
    component: ViewToDo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
