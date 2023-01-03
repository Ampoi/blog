<template>
  <div class="flex flex-col max-w-2xl mx-5 mt-10 gap-4">
    <div>
      <NuxtLink to="/">
        <i class="fa-solid fa-chevron-left text-slate-500"></i>
      </NuxtLink>
    </div>
    <div class="bg-white/40 rounded-xl p-5 flex flex-col gap-2">
      <div :style="`background-image:url(${article.eyecatch.url})`" class="relative bg-center bg-cover before:pt-[60%] before:block rounded-md"/>
      <h1 class="text-3xl font-bold text-center">{{article.title}}</h1>
      <div v-html="article.content"/>
    </div>
  </div>
</template>
<script>
import  { createClient } from "microcms-js-sdk"

export default {
  data(){return{
    client: createClient({
      serviceDomain: "ampoi-blog",
      apiKey: useRuntimeConfig().public.apikey,
    }),
    article: {
      eyecatch: {}
    }
  }},
  beforeMount(){
    const id = this.$route.params.slug[0]
    this.client
      .get({
        endpoint: 'blogs',
        contentId: id,
      })
      .then((res) => {
        this.article = res
      });
  }
}
</script>