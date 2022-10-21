<template>
  <nav class="navbar navbar-expand-lg mb-5">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img :src="logoUrl" width="110">
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div>
        <button
          class="btn btn-outline-secondary rounded-5"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <font-awesome-icon :icon="['fas', 'user']"/>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><h6 class="dropdown-header">Profil</h6></li>
          <li class="dropdown-item"><h5>John Doe</h5></li>
          <li class="dropdown-item">john.doe@email.de</li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="/admin">Admin</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#"><font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']"/> Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
// eslint-disable-next-line
import { Dropdown } from "bootstrap";

const logoUrl = new URL('@/assets/images/true-gift-logo.png', import.meta.url).href
</script>

<style lang="scss" scoped>
 .navbar {
   border-bottom: 1px solid #eee9f7;
 }
</style>
