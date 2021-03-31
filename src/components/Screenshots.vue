<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Screenshots',
  setup() {
    const currentIndex = ref(0);

    const Images = [
      'https://i.imgur.com/COIt2PJ.jpg',
      'https://i.imgur.com/KcpdKpy.jpg',
      'https://i.imgur.com/fWMv9n9.jpg',
      'https://i.imgur.com/LB7NILV.jpg',
      'https://i.imgur.com/xWWZsNU.jpg',
      'https://i.imgur.com/bO4n4Wl.jpg',
    ];

    setInterval(() => {
      if (currentIndex.value < Images.length - 1) currentIndex.value += 1;
      else currentIndex.value = 0;
    }, 4000);

    return {
      currentIndex,
      Images,
    };
  },
});
</script>

<template>
  <div class="relative flex w-88 mb-4">
    <img
      v-for="(image, index) in Images"
      :key="image"
      class="w-full rounded-3xl shadow-lg transition-opacity duration-300"
      :class="currentIndex == index ? 'opacity-100' : 'absolute opacity-0'"
      :src="image"
    />
  </div>
</template>
