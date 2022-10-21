<template>
    <img
        class="partner-img"
        :src="imgUrl"
        alt="user-profil"
    />
  <span :class="partnerNameClass">
    <font-awesome-icon v-if="partner.isSelected" :icon="['fas', 'check']" class="me-1"/>
    {{ props.partner.name}}
  </span>
</template>

<script setup>
import { computed, defineProps} from "vue"

  // ---------- Props
  const props = defineProps({
    partner: Object,
    isSelectionAllowed: Boolean,
    image: String
  })

  // ---------- Computed
  const partnerNameClass = computed (() => {
    if (props.partner.isSelected && !props.isSelectionAllowed) {
      return "partner-name partner-name_success"
    }else if (!props.partner.isSelected && !props.isSelectionAllowed){
      return "partner-name partner-name_disable"
    }

    return "partner-name"
  })

  const imgUrl = new URL(`../assets/images/${props.image}.png`, import.meta.url).href

</script>

<style scoped>

</style>