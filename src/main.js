import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import hooks from '@u3u/vue-hooks';
import NewsItems from '@/components/NewsItems.vue';
import Comment from '@/components/Comment.vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.component('NewsItems', NewsItems);
Vue.component('Comment', Comment);
Vue.use(VueCompositionApi);
Vue.use(hooks);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
