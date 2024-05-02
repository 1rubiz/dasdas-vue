import { createRouter, createWebHistory} from 'vue-router'
import Landing from '../Landing/Landing.vue';
import Article from '../Articles/Article.vue';

const routes= [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article,
    },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;