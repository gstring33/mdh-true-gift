<template>
  <div class="btn-group dropstart">
    <button
        class="btn btn-outline-secondary rounded-5"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
    >
      <font-awesome-icon :icon="['fas', 'user']"/>
    </button>
    <ul class="dropdown-menu">
      <li><h6 class="dropdown-header">Profil</h6></li>
      <li class="dropdown-item"><h5>{{ `${user.firstname}  ${user.lastname}`}}</h5></li>
      <li class="dropdown-item">{{ user.email }}</li>
      <li v-if="user.isAdmin"><hr class="dropdown-divider" /></li>
      <li v-if="user.isAdmin"><a class="dropdown-item" href="/admin">Admin</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li>
        <a class="dropdown-item" @click="logout">
          <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']"/> Logout
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>

import { useAuthStore } from "@/stores/auth.store.js";

const auth = useAuthStore()
const user = auth.user()

const logout = function () {
  auth.logout()
}
</script>