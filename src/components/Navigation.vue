<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationBar',
  setup() {
    const Links = [
      {
        title: 'About',
        url: '/about',
      },
    ];

    return {
      Links,
    };
  },
});
</script>

<template>
  <div
    class="flex justify-between items-center p-2 font-extrabold bg-background shadow-lg"
  >
    <router-link to="/" class="flex items-center text-2xl">
      <img class="h-14 w-14 mr-2" src="@/assets/images/logo.png" />
      SongTube
    </router-link>
    <div class="flex mr-4 text-lg">
      <router-link
        v-for="link in Links"
        :key="`link-${link.title}`"
        :to="link.url"
      >
        {{ link.title }}
      </router-link>
    </div>
  </div>
</template>
