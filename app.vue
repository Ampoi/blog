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
      <div class="w-screen px-10">
        <div>
          <h1 class="text-6xl font-bold -ml-4 text-black/20">01</h1>
          <h1 class="text-5xl font-bold -mt-8">作字</h1>
        </div>
        <p class="mt-2 text-lg">字のデザインをしたりとかしてます。</p>
      </div>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap');
</style>