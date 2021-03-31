<script lang="ts">
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

import Screenshots from '@/components/Screenshots.vue';

// Icons
import shieldIcon from '@/components/Icons/shield.vue';
import accountLockIcon from '@/components/Icons/accountLock.vue';
import musicNoteIcon from '@/components/Icons/musicNote.vue';
import playlistCheckIcon from '@/components/Icons/playlistCheck.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Screenshots,
  },
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

    const featureList = [
      {
        title: 'Ad-free, forever',
        description: 'Do anything, without any interruptions',
        icon: shieldIcon,
      },
      {
        title: 'Privacy friendly',
        description: 'Zero Google services, goodbye trackers',
        icon: accountLockIcon,
      },
      {
        title: 'Music powered',
        description: 'Audio converter & tags from MusicBrainz',
        icon: musicNoteIcon,
      },
      {
        title: 'Playlists like no other',
        description: 'Save, play and download playlists your way',
        icon: playlistCheckIcon,
      },
    ];

    return { featureList };
  },
});
</script>

<template>
  <div
    class="home flex flex-col-reverse md:flex-row md:w-full md:h-full justify-center items-center md:pl-8"
  >
    <Screenshots class="flex md:items-center md:justify-center" />
    <div class="flex flex-col justify-center items-center mb-12 md:mb-0 px-8">
      <h1 class="text-4xl font-bold text-center my-8 md:my-0 md:mb-8">
        Beautiful, functional and fast Youtube Client
      </h1>
      <div
        class="grid grid-flow-col grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4"
      >
        <div
          v-for="(feature, index) in featureList"
          :key="`feature${index}`"
          class="flex"
        >
          <component class="mr-3 mt-1.5" :is="feature.icon" />
          <div class="leading-relaxed">
            <h4 class="text-lg text-accent font-bold">{{ feature.title }}</h4>
            <p class="text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center mt-12">
        <a
          href="https://github.com/SongTube/SongTube-App/releases/latest"
          class="bg-accent shadow-lg rounded-2xl p-4 font-bold mb-6"
        >
          Download SongTube
        </a>
        <a href="https://www.paypal.com/paypalme/artixo" class="font-bold">
          Donate
        </a>
      </div>
    </div>
  </div>
</template>
