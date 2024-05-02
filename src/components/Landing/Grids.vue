<script setup lang='ts'>
    import {dateFormat} from '../dateFormat';
    // initialize the props
    const props = defineProps(['gridData'])
    // get props from parent component
    const grid = props.gridData;
    // remove the first item in the array
    const data = grid.slice();
</script>

<template>
    <div>
        <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-7 mb-[10vh] mt-[4vh]">
            <section v-for="item in data" :key="item.id" class="relative rounded-[5px] h-auto p-1 card">
                <div class="w-[100%] flex justify-center items-center">
                    <img :src="item.yoast_head_json.og_image[0].url" :height="item.yoast_head_json.og_image[0].height" :width="item.yoast_head_json.og_image[0].width"/>
                </div>
                <div class="flex flex-col justify-between p-3 bg-white text-[2.2vh]">
                    <div class="mb-9">
                        <p class="text-[1.7vh] mb-2 mt-3"> <span class="font-bold">{{item.yoast_head_json.author}}</span> . {{dateFormat(item.date)}}</p>
                        <h2 class="font-extrabold text-[3.4vh] mb-2"> {{item.yoast_head_json.title}}</h2>
                        <p class="">
                            {{item.yoast_head_json.description}}
                        </p>
                    </div>
                    <div class="mt-5 flex absolute left-0 bottom-1 w-[100%] p-4 justify-between items-center pb-2">
                       <p>{{item.yoast_head_json.twitter_misc["Est. reading time"]}} read</p>
                       <a :href="'/article/'+item.id"> <p class="flex justify-center items-center gap-2 text-[blue]">Read Full <img src="/arrow.svg"/></p></a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>