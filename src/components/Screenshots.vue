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
      if (currentIndex.value == Images.length - 1) currentIndex.value = 0;
      else currentIndex.value += 1;
    }, 4000);

    return {
      currentIndex,
      Images,
    };
  },
});
</script>

<template>
  <div class="relative w-88">
    <transition
      mode="out-in"
      name="fade"
      v-for="(image, index) in Images"
      :key="image"
    >
      <img
        class="absolute w-full rounded-3xl shadow-lg"
        v-if="currentIndex == index"
        :src="image"
      />
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-duration: 400ms;
}
.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
