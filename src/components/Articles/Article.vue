<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { dataStore } from '../utils/store.js';
  // import {dateFormat} from '../dateFormat'
  import Grids from '../Landing/Grids.vue';
  import { dateFormat } from '../utils/dateUtils';

  // get id embedded in the route
  const route = useRoute();
  const id = route.params.id;

  // initialize the store
  const data = await dataStore();

  // get blog via store method
  await data.getBlogData(id);
  const format = dataStore.dateFormat;
  // get blog state from store
  const blog = data.blog
  // get 'more blog' state from store
  const moreBlog =  data.moreBlog;
</script>

<template>
    <article>
        <div className='flex flex-col justify-center items-center md:ml-[15%] md:mr-[15%] mb-[7%]'>
          <div className='text-left w-[100%]'>
            <p className=''>By {{blog.yoast_head_json.author}} . {{dateFormat(blog.date)}}</p>
            <h1 className='text-[4.5vh] font-extrabold'>{{blog.yoast_head_json.title}}</h1>
          </div>
          <article className='w-[100%] article' v-html="blog.content.rendered"></article>
        </div>
        <section>
      <h3 class="font-extrabold text-[3.5vh]">More Articles</h3>
        <Grids :gridData="moreBlog"/>
    </section>
    </article>
</template>