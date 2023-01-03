<template>
  <!--背景のあにめーしょん-->
  <div id="bg-anime" class="fixed h-screen w-screen">
    <div class="absolute top-[calc(50vh-40px)] left-[calc(50vw-40px)]">
      <div id="block4" class="bg-gradient-to-tr from-blue-500 to-sky-400 h-20 w-20"></div>
      <div id="block3" class="bg-gradient-to-tr from-orange-200 to-pink-300 h-20 w-20 -mt-20"></div>
      <div id="block2" class="bg-gradient-to-tr from-indigo-300 to-fuchsia-200 h-20 w-20 -mt-20"></div>
      <div id="block1" class="bg-gradient-to-tr from-teal-200 to-sky-300 h-20 w-20 -mt-20"></div>
    </div>
  </div>
  <!--メイン-->
  <div class="relative snap-y snap-mandatory overflow-y-auto h-screen">
    <div class="snap-center h-screen w-screen grid place-content-center">
      <div>
        <h1 class="text-8xl text-center font-['Josefin_Sans']">Ampoi</h1>
        <div class="mt-2 flex flex-row gap-2 justify-center">
          <NuxtLink to="https://twitter.com/4mpoi">
            <img src="@/assets/sns_logos/twitter.svg" alt="Twitter" class="h-5">
          </NuxtLink>
          <NuxtLink to="https://github.com/Ampoi">
            <img src="@/assets/sns_logos/github.svg" alt="Github" class="h-5">
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="snap-center h-screen w-screen grid place-content-center">
      <div class="max-w-2xl px-10">
        <div>
          <h1 class="text-6xl font-bold -ml-4 text-black/20">01</h1>
          <h1 class="text-5xl font-bold -mt-8">作字</h1>
        </div>
        <p class="mt-2 text-lg">字のデザインをしたりとかしてます。</p>
        <div class="flex flex-row gap-8 h-[400px] overflow-x-auto p-4 snap-x relative snap-mandatory">
          <img
            :src="sakuji.image.url"
            v-for="sakuji in sakujis"
            :key="sakuji.key"
            class="rounded-md shadow-lg snap-center"
          >
        </div>
      </div>
    </div>
    <div class="snap-center h-screen w-screen grid place-content-center">
      <div class="max-w-2xl px-10">
        <div>
          <h1 class="text-6xl font-bold -ml-4 text-black/20">02</h1>
          <h1 class="text-5xl font-bold -mt-8">Blog</h1>
        </div>
        <p class="mt-2 text-lg">ブログです。microCMSで管理してます。</p>
        <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <NuxtLink
            v-for="blog in blogs"
            :key="blog.key"
            class="flex flex-col bg-white/40 backdrop-blur-md rounded-md"
            :to="`blog/${blog.id}`"
          >
            <div :style="`background-image: url(${blog.eyecatch.url});`" class="bg-cover rounded-t-md before:pt-[60%] before:block relative"></div>
            <h2 class="p-4 pt-2 text-xl font-bold border-2 border-t-0 rounded-md border-white/40 h-full">{{blog.title}}</h2>
          </NuxtLink>
        </div>
      </div>
    </div>
    <footer class="snap-end py-8 text-lg text-center">
      <p>©︎Ampoi 2023</p>
    </footer>
  </div>
</template>
<script>
import  { createClient } from "microcms-js-sdk"
import anime from "animejs/lib/anime.es.js"

export default {
  data(){return{
    blogs: [],
    sakujis: [],
    client: createClient({
      serviceDomain: "ampoi-blog",
      apiKey: useRuntimeConfig().public.apikey
    })
  }},
  mounted(){
    this.client
      .get({
        endpoint: 'blogs'
      })
      .then((res) => {
        this.blogs = res.contents
      });
    this.client
      .get({
        endpoint: 'sakuji'
      })
      .then((res) => {
        this.sakujis = res.contents
      })
    
    anime({
      targets: '#bg-anime #block1',
      translateY: -250,
      translateX: -100,
      scale: [4,1],
      delay: 500,
      borderRadius: ["50%", "10%"],
      rotate: "240deg", 
      easing: 'easeInOutElastic(1, .6)',
    });

    anime({
      targets: '#bg-anime #block2',
      translateY: -100,
      translateX: 200,
      scale: [4, 1.5],
      delay: 700,
      borderRadius: ["50%", "10%"],
      rotate: "240deg", 
      easing: 'easeInOutElastic(1, .6)',
    });

    anime({
      targets: '#bg-anime #block3',
      translateY: 150,
      translateX: 100,
      scale: [4, 0.5],
      delay: 900,
      borderRadius: ["50%", "10%"],
      rotate: "240deg", 
      easing: 'easeInOutElastic(1, .6)',
    });

    anime({
      targets: '#bg-anime #block4',
      translateY: 50,
      translateX: -200,
      scale: [4, 0.5],
      delay: 1100,
      borderRadius: ["50%", "10%"],
      rotate: "240deg", 
      easing: 'easeInOutElastic(1, .6)',
    });
  }
}
</script>