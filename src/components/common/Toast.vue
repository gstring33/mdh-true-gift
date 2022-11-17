<template>
  <div ref="toastRef" class="toast align-items-center text-white border-0" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
      <div class="toast-body">
        {{ message }}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import { storeToRefs } from 'pinia'
import { useToastStore } from "@/stores/toast.store.js";

const store = useToastStore()
const toastRef = ref(null)
const { message } = storeToRefs(store)

onMounted(() => {
  store.init(toastRef.value)
});


</script>