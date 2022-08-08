<template>
  <Navbar v-if="isLogged"/>
  <RouterView />
</template>

<script setup>
import { Dropdown } from "bootstrap"
import { RouterView } from "vue-router";
import Navbar from "@/components/common/Navbar.vue";

const isLogged = true
</script>
<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
</style>
