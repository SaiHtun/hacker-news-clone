import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsItem from '../components/NewsItem.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/item/:id',
    name: 'news-item',
    component: NewsItem,
  },
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/:type',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
