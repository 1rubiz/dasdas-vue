<script lang='ts' setup>
    import Grids from './Grids.vue'
    import axios from 'axios'
    import dateFormat from '../dateFormat';

    // fetch data 
    const data = await axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&per_page=30')  
    const articles  = await data.data;
    const landing = articles[0];
</script>

<template>
    <section class="mt-[8vh] flex-col flex lg:flex-row justify-center items-start gap-3 h-[auto] mb-[20vh] md:mb-[7vh]">
        <img :src="landing.yoast_head_json.og_image[0].url" height="280px" width="500px"/>
        <div class="flex flex-col justify-between h-[240px] lg:h-[280px] relative">
            <div class="">
                <p class="text-[1.7vh] mb-2"> <span class="font-bold">{{landing.yoast_head_json.author}}</span> . {{dateFormat(landing.date)}}</p>
                <h2 class="font-extrabold text-[3.4vh] mb-2"> {{landing.yoast_head_json.title}}</h2>
                <p class="">
                    {{landing.yoast_head_json.description}}
                </p>
            </div>
            <div class="flex justify-between items-center lg:absolute lg:w-[100%] lg:right-0 lg:bottom-6">
                <p>{{landing.yoast_head_json.twitter_misc["Est. reading time"]}} read</p>
                <a :href="'/article/'+landing.id"><p class="flex justify-center items-center gap-2 text-[blue]">Read Full <img src="/arrow.svg"/></p></a>
            </div>
        </div>
    </section>

    <Grids :gridData="articles"/>

    <section class="text-center text-[2.4vh] m-10">
        <p class="font-bold text-[3.4vh]">Join our team of Writers</p>
        <p>
            On dasdas, writers earn a liing doing what they love.
        </p>
        <p>
            Getting started is easy. Just pay a one time <span class="font-bold">$25 fee</span> and everything is ready to go.
        </p>
        <button class="bg-black p-2 rounded-none w-[16svw] lg:w-[11svw] m-2 text-white">JOIN US</button>
    </section>
</template>