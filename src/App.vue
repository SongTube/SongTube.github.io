<script lang="ts">
import { defineComponent } from 'vue';

import ParticlesBg from 'particles-bg-vue/src/particles-bg/ParticlesBg.vue';
import Navigation from '@/components/Navigation.vue';

export default defineComponent({
  name: 'App',
  components: {
    ParticlesBg,
    Navigation,
  },
});
</script>

<template>
  <div class="App flex h-screen w-screen overflow-y-hidden">
    <ParticlesBg
      class="absolute z-0 blur"
      type="circle"
      :color="['#F6453A']"
      :num="7"
    />
    <div
      class="relative flex flex-col h-full w-full z-10 bg-background bg-opacity-75 overflow-y-auto"
    >
      <Navigation class="z-20" />
      <router-view class="z-10" />
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: 'Manrope';
  src: url('./assets/fonts/Manrope-Medium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Manrope';
  src: url('./assets/fonts/Manrope-ExtraBold.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
}

:root {
  background-color: #212121;
}

.blur {
  filter: blur(64px);
  -webkit-filter: blur(64px);
}

#app {
  font-family: 'Manrope', Avenir, Ubuntu, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
