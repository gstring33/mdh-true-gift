<template>
  <div class="container">
    <div class="mt-5 text-center">
      <img :src="logoUrl"  class="text-center" width="180">
    </div>
    <main class="form-reset-password">
      <Toast></Toast>
      <form class="text-center">
        <h1 class="h3 mb-5 fw-normal mt-5">Bitte setzen Sie Ihr Passwort zurück</h1>
        <div class="form-floating">
          <input v-model="newPassword" type="password" class="form-control newPassword" placeholder="neues Passwort">
          <label for="floatingInput">Neues Passwort</label>
        </div>
        <div class="form-floating">
          <input v-model="newPassword2" type="password" class="form-control confirmPassword" placeholder="neues Passwort">
          <label for="floatingPassword">Neues Passwort bestätigen</label>
        </div>
        <button @click.prevent="onSubmit" class="w-100 btn btn-lg btn-primary mt-5" type="submit">
          <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" class="me-3" />Passwort zurück setzen
        </button>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAccountStore } from "@/stores/account.store.js";
import Toast from '@/components/common/Toast.vue';

const logoUrl = new URL('../../assets/images/true-gift-logo.png', import.meta.url).href
const newPassword = ref(null);
const newPassword2 = ref(null);


async function onSubmit () {
  const accountStore = useAccountStore();
  await accountStore.changePassword(newPassword.value, newPassword2.value)
}

</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-reset-password {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;

  .form-floating:focus-within {
    z-index: 2;
  }

  .newPassword {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .confirmPassword {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
</style>
