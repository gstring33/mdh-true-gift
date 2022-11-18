<template>
  <div class="container">
    <div class="mt-5 text-center">
      <img :src="logoUrl"  class="text-center" width="180">
    </div>
    <main class="form-reset-password">
      <form class="text-center">
        <h1 class="h3 mb-5 fw-normal mt-5">Bitte setzen Sie Ihr Passwort zurück</h1>
        <div class="form-floating">
          <input type="oldPassword" class="form-control" placeholder="altes Passwort">
          <label for="floatingInput">Altes Passwort</label>
        </div>
        <div class="form-floating">
          <input type="newPassword" class="form-control" placeholder="neues Passwort">
          <label for="floatingInput">Neues Passwort</label>
        </div>
        <div class="form-floating">
          <input type="confirmPassword" class="form-control" placeholder="neues Passwort">
          <label for="floatingPassword">Neues Passwort bestätigen</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary mt-5" type="submit">
          <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" class="me-3" />Passwort zurück setzen
        </button>
      </form>
    </main>
  </div>
</template>

<script setup>
const logoUrl = new URL('../../assets/images/true-gift-logo.png', import.meta.url).href

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

  input[type="oldPassword"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  input[type="newPassword"] {
    margin-bottom: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  input[type="confirmPassword"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
</style>
