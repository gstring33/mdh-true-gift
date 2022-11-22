<template>
  <Navbar />
  <Members :totalUsers="total" :users="users"/>
  <List />
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

onBeforeMount(async () => {
  try {
    const data = await fetcher.get(import.meta.env.VITE_API_BASE_URL + '/api/dashboard/users')
    const usersArr  = []
    let userLine = [];
    data.users.forEach((p) => {
      userLine.push(p)
      if(userLine.length === 3 || (userLine.length === data.total && data.total < 3) ) {
        usersArr.push(userLine)
        userLine = []
      }
    })
    total.value = data.total
    users.value = usersArr

  } catch (error) {
    const { logout } = useAuthStore();
    logout()
  }
})

</script>

<style scoped></style>
