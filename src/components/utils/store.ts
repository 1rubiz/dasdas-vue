import { defineStore } from 'pinia';
import axios from 'axios';

interface DataStoreState {
  blog: any;
  moreBlog: any[]; // Change this to array type
  loading: boolean;
}

export const dataStore = defineStore('user', {
  state: (): DataStoreState => ({
    blog: {},
    moreBlog: [],
    loading: false
  }),
  actions: {
    async getBlogData(id: any) {
      try {
        this.loading = true;
        const response = await axios.get('https://techcrunch.com/wp-json/wp/v2/posts/' + id + '?per_page=1');
        const moreBlogResponse = await axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&per_page=3');
        this.moreBlog = moreBlogResponse.data;
        this.blog = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        this.loading = false;
      }
    },
    dateFormat(dateString :string) {
        const currentDate = new Date();
        const providedDate = new Date(dateString);
        const timeDifference = currentDate - providedDate;
        const secondsDifference = Math.floor(timeDifference / 1000);
        const minutesDifference = Math.floor(secondsDifference / 60);
        const hoursDifference = Math.floor(minutesDifference / 60);
        const daysDifference = Math.floor(hoursDifference / 24);
        const monthsDifference = Math.floor(daysDifference / 30);
      
        if (monthsDifference >= 1) {
            return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
        } else if (daysDifference >= 2) {
            return `${daysDifference} days ago`;
        } else if (daysDifference === 1) {
            return 'one day ago';
        } else if (hoursDifference >= 2) {
            return `${hoursDifference} hours ago`;
        } else if (hoursDifference === 1) {
            return 'an hour ago';
        } else if (minutesDifference >= 2) {
            return `${minutesDifference} minutes ago`;
        } else if (minutesDifference === 1) {
            return 'a minute ago';
        } else {
            return 'just now';
        }
    }
  }
});




// // store.js
// import { defineStore } from 'pinia';
// import axios from 'axios';

// interface DataStoreState {
//   blog: any;
//   moreBlog: any;
//   loading: boolean;
// }

// export const dataStore = defineStore('user', {
//   state: (): DataStoreState => ({
//     blog: {},
//     moreBlog: [],
//     loading: false
//   }),
//   actions: {
//     async getBlogData(id: string) {
//       try {
//         this.loading = true;
//         const response = await axios.get('https://techcrunch.com/wp-json/wp/v2/posts/'+id+'?per_page=1');
//         const moreBlogResponse = await axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&per_page=3')
//         this.moreBlog = moreBlogResponse.data;
//         this.blog = response.data;
//         this.loading = false;
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     }
//   }
// });
