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
    class="flex flex-row justify-between items-center px-4 py-6 font-bold tracking-widest text-lg"
  >
    <router-link to="/" class="flex">
      <p>Logo</p>
      SongTube
    </router-link>
    <div class="flex">
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
