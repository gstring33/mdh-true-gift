<template>
  <Navbar />
  <div v-if="!ready" class="d-flex justify-content-center">
    <div class="spinner-border m-5 text-primary" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else>
    <Members :members="membersFormatted" :isPartnerSelected="isPartnerSelected" :total="total"/>
    <List :list="list" />
  </div>
</template>

<script setup>
import Navbar from "@/components/common/Navbar.vue";
import Members from "@/components/Members.vue";
import List from "@/components/List.vue";
import { fetcher } from "@/helpers/fetcher.js";
import {computed, onBeforeMount, ref} from "vue";
import { useAuthStore } from '@/stores/auth.store.js';

const list = ref(null)
const ready = ref(false)
const isPartnerSelected = ref(false);
const total = ref(0);
let members;

onBeforeMount(async () => {
  try {
    const usersData = await fetcher.get(import.meta.env.VITE_API_BASE_URL + '/api/dashboard/users')
    const listData = await fetcher.get(import.meta.env.VITE_API_BASE_URL + '/api/gift/list')
    isPartnerSelected.value = usersData.isPartnerSelected
    total.value = usersData.total
    members = usersData.users
    list.value = listData
    ready.value = true

  } catch (error) {
    console.log(error)
    const { logout } = useAuthStore();
    logout()
  }
})

const membersFormatted = computed(() => {
  const membersArr  = []
  let membersLine = [];
  if (isPartnerSelected.value) {
    return members
  }
  members.forEach((p) => {
    membersLine.push(p)
    if(membersLine.length === 3 || (membersLine.length === total.value && total.value < 3) ) {
      membersArr.push(membersLine)
      membersLine = []
    }
  })
  return membersArr;
})

</script>

<style scoped></style>
