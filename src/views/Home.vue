<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
  name: 'Home',
  setup() {
    useHead({
      title: 'SongTube',
      meta: [
        {
          name: 'description',
          content: 'Official SongTube Website',
        },
      ],
    });
  },
});
</script>
