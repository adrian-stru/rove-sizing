import Vue from 'vue';
import Router from 'vue-router';
import Start from './views/Start.vue';
import Selection from './views/Selection.vue';
import Form from './views/Form.vue';
import Finish from './views/Finish.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    {
      path: '/index',
      name: 'start',
      component: Start,
    },
    {
      path: '/index.html',
      name: 'start',
      component: Start,
    },
    {
      path: '/selection',
      name: 'selection',
      component: Selection,
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
    },
    {
      path: '/finish',
      name: 'finish',
      component: Finish,
    },
  ],
});
