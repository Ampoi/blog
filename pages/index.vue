<template>
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
      </div>
    </div>
    <div class="snap-center h-screen w-screen grid place-content-center">
      <div class="max-w-2xl px-10">
        <div>
          <h1 class="text-6xl font-bold -ml-4 text-black/20">02</h1>
          <h1 class="text-5xl font-bold -mt-8">Blog</h1>
        </div>
        <p class="mt-2 text-lg">ブログです。micro-cmsで管理してます。</p>
        <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <NuxtLink
            v-for="blog in blogs"
            :key="blog.key"
            class="flex flex-col bg-white/40 rounded-md"
            :to="`blog/${blog.id}`"
          >
            <div :style="`background-image: url(${blog.eyecatch.url});`" class="bg-cover rounded-t-md before:pt-[60%] before:block relative"></div>
            <h2 class="p-4 pt-2 text-xl font-bold border-2 border-t-0 rounded-md border-white/40">{{blog.title}}</h2>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import  { createClient } from "microcms-js-sdk"

export default {
  data(){return{
    blogs: [],
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
  }
}
</script>