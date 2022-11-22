<template>
  <div class="container">
    <div class="mt-5 text-center">
      <img :src="logoUrl"  class="text-center" width="180">
    </div>
    <main class="form-signin">
      <form class="text-center">
        <h1 class="h3 mb-5 fw-normal mt-5">Bitte anmelden</h1>
        <div class="form-floating">
          <input v-model="email" type="email" class="form-control" placeholder="name@example.com">
          <label for="floatingInput">Email Addresse</label>
        </div>
        <div class="form-floating">
          <input v-model="password" type="password" class="form-control" placeholder="Password">
          <label for="floatingPassword">Passwort</label>
        </div>
        <button @click.prevent="onSubmit" class="w-100 btn btn-lg btn-primary mt-5" type="submit" :disabled="disableBtn">
          <span v-if="submitted" class="spinner-border spinner-border-sm mr-3 spinner-margin" role="status" aria-hidden="true"></span>
          Anmelden
        </button>
      </form>
    </main>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useAuthStore } from "@/stores/auth.store.js";

  const email = ref('')
  const password = ref('')
  const submitted = ref(false)
  const disableBtn = ref(false)
  const logoUrl = new URL('../../assets/images/true-gift-logo.png', import.meta.url).href

  async function onSubmit () {
    submitted.value = true
    disableBtn.value = true
    const authStore = useAuthStore()
    const login = await authStore.login(email.value, password.value)
    if (login?.data?.code === 401) {
      submitted.value = false
      disableBtn.value = false
    }
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

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;

  .form-floating:focus-within {
    z-index: 2;
  }

  input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .spinner-margin {
    margin : 2px 5px;
  }
}
</style>
