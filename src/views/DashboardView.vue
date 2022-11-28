<template>
  <Navbar />
  <div v-if="!ready" class="d-flex justify-content-center">
    <div class="spinner-border m-5 text-primary" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else>
    <Members :totalUsers="total" :users="users"/>
    <List :giftList="gifts" />
  </div>
</template>

<script setup>
import Navbar from "@/components/common/Navbar.vue";
import Members from "@/components/Members.vue";
import List from "@/components/List.vue";
import { fetcher } from "@/helpers/fetcher.js";
import {onBeforeMount, ref} from "vue";
import { useAuthStore } from "@/stores/auth.store.js";

const total = ref(null)
const users = ref(null)
const gifts = ref(null)
const ready = ref(false)

onBeforeMount(async () => {
  try {
    const usersData = await fetcher.get(import.meta.env.VITE_API_BASE_URL + '/api/dashboard/users')
    const listData = await fetcher.get(import.meta.env.VITE_API_BASE_URL + '/api/gift/list')

    const usersArr  = []
    let userLine = [];
    usersData.users.forEach((p) => {
      userLine.push(p)
      if(userLine.length === 3 || (userLine.length === usersData.total && usersData.total < 3) ) {
        usersArr.push(userLine)
        userLine = []
      }
    })
    total.value = usersData.total
    users.value = usersArr
    gifts.value = listData
    ready.value = true

  } catch (error) {
    const { logout } = useAuthStore();
    logout()
  }
})

</script>

<style scoped></style>
