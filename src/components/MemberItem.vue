<template>
    <img
        class="partner-img"
        :src="imgUrl"
        alt="user-profil"
    />
  <span class="px-2">
    {{ props.user.fullname }}
  </span>
</template>

<script setup>
import { defineProps} from "vue"

  // ---------- Props
  const props = defineProps({
    user: Object,
  })

  const imgUrl = new URL(`../assets/images/${props.user.img}.png`, import.meta.url).href

</script>

<style scoped>

</style>