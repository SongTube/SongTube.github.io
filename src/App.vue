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
  <div class="App h-screen w-screen overflow-y-hidden">
    <ParticlesBg
      class="absolute z-0 blur"
      type="circle"
      :color="['#F6453A']"
      :num="7"
    />
    <div
      class="absolute z-10 h-full w-full bg-background bg-opacity-80 overflow-y-auto"
    >
      <Navigation />
      <router-view />
    </div>
  </div>
</template>

<style>
:root {
  background-color: #212121;
}

.blur {
  filter: blur(64px);
  -webkit-filter: blur(64px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
