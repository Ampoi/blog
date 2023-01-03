<template>
  <div class="mx-5">
    <div class="flex flex-col max-w-2xl mx-auto mt-10 gap-4">
      <div>
        <NuxtLink to="/">
          <i class="fa-solid fa-chevron-left text-slate-500"></i>
        </NuxtLink>
      </div>
      <div class="bg-white/40 rounded-xl p-5 flex flex-col gap-8">
        <div>
          <div :style="`background-image:url(${article.eyecatch.url})`" class="relative bg-center bg-cover before:pt-[60%] before:block rounded-md"/>
          <h1 class="text-3xl font-bold text-center mt-4">{{article.title}}</h1>
        </div>
        <div v-html="article.content" id="mainContent"/>
      </div>
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
<style>
#mainContent {
  font-size: 16px;
}

#mainContent h2{
  font-size: 30px;
  font-weight: bolder;
}

#mainContent blockquote{
  margin: 8px 0;
  padding: 8px;
  border-left: solid 4px #cbd5e1;
  background: #e2e8f054;
}

#mainContent pre{
  margin: 8px 0;
  padding: 8px;
  background: #00000098;
  border: solid 2px rgba(0, 0, 0, 0.047);
  color: white;
  border-radius: 4px;
}

#mainContent ol{
  margin: 8px 0;
  list-style: decimal inside;
}

#mainContent li{
  padding: 6px 0;
}

#mainContent li{
  margin: 8px 0;
  list-style: inside;
}

#mainContent img{
  border-radius: 0.375rem;
}
</style>