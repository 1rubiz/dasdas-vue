// store.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const dataStore = defineStore('user', {
  state: () => ({
    blog: {},
    moreBlog: [],
    loading: false
  }),
  actions: {
    async getBlogData(id) {
      try {
        this.loading = true;
        const response = await axios.get('https://techcrunch.com/wp-json/wp/v2/posts/'+id+'?per_page=1');
        const moreBlogResponse = await axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&per_page=3')
        this.moreBlog = moreBlogResponse.data;
        this.blog = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  }
});
