<template>
  <div ref="toastRef" class="toast align-items-center text-white border-0 fade" :class="toastClass" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
      <div class="toast-body" v-html="message">
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import { storeToRefs } from 'pinia'
import { useToastStore } from "@/stores/toast.store.js";

const store = useToastStore()
const toastRef = ref(null)
const { message, toastClass } = storeToRefs(store)

onMounted(() => {
  store.init(toastRef.value)
});



</script>