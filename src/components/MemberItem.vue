<template>
    <img
        class="partner-img"
        :src="imgUrl"
        alt="user-profil"
    />
  <span :class="partnerNameClass">
    <font-awesome-icon v-if="props.user.isSelected" :icon="['fas', 'check']" class="me-1"/>
    {{ props.user.fullname }}
  </span>
</template>

<script setup>
import { computed, defineProps} from "vue"

  // ---------- Props
  const props = defineProps({
    user: Object,
  })

  // ---------- Computed
  const partnerNameClass = computed (() => {
    if(props.user.isPartner === null) {
      return
    }else if(props.user.isPartner) {
      return "partner-name partner-name_success"
    }else if (!props.user.isPartner){
      return "partner-name partner-name_disable"
    }

    return "partner-name"
  })

  const imgUrl = new URL(`../assets/images/${props.user.img}.png`, import.meta.url).href

</script>

<style scoped>

</style>