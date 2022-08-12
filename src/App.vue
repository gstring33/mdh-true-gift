<template>
  <Navbar v-if="isLogged" />
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/common/Navbar.vue";

const isLogged = true;
</script>
