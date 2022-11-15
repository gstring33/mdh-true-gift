<template>
  <div class="container">
    <main class="form-signin">
      <Toast :class="toastClass"></Toast>
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
        <button @click.prevent="onSubmit" class="w-100 btn btn-lg btn-primary mt-5" type="submit">
          <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" class="me-3" />Anmelden
        </button>
      </form>
    </main>
  </div>
</template>

<script setup>
  import Toast from '@/components/common/Toast.vue';
  import { ref } from 'vue';
  import { useAuthStore } from "@/stores/auth.store.js";
  import { useToastStore } from "@/stores/toast.store.js";

  const email = ref('')
  const password = ref('')
  const toastClass = {'bg-warning' : true}

  async function onSubmit () {
    const authStore = useAuthStore()
    const toastStore = useToastStore()
    const data = await authStore.login(email.value, password.value)
    if ([401, 403].includes(data.code)) {
      toastStore.show({message: data.message})
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
}
</style>
