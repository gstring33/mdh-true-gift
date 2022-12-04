<template>
  <nav class="navbar navbar-expand-lg mb-5">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img :src="logoUrl" width="110">
      </router-link>
      <!--<ProfilMenu></ProfilMenu>-->
      <a type="button" class="btn btn-outline-dark btn-sm" @click="logout">
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']"/> Logout
      </a>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
//import ProfilMenu from '@/components/common/ProfilMenu.vue';
// eslint-disable-next-line
import { Dropdown } from "bootstrap";
import { useAuthStore } from "@/stores/auth.store.js";


const logoUrl = new URL('../../assets/images/true-gift-logo.png', import.meta.url).href

const auth = useAuthStore()

const logout = function () {
  auth.logout()
}

</script>

<style lang="scss" scoped>
 .navbar {
   border-bottom: 1px solid #eee9f7;
 }
</style>
