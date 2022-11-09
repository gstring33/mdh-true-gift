<template>
  <nav class="navbar navbar-expand-lg mb-5">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img :src="logoUrl" width="110">
      </router-link>
      <ProfilMenu></ProfilMenu>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
import ProfilMenu from '@/components/common/ProfilMenu.vue';
// eslint-disable-next-line
import { Dropdown } from "bootstrap";

const logoUrl = new URL('../../assets/images/true-gift-logo.png', import.meta.url).href
</script>

<style lang="scss" scoped>
 .navbar {
   border-bottom: 1px solid #eee9f7;
 }
</style>
