<template>
  <form>
    <div class="mb-3">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="userMaleRadio" value="Male">
        <label class="form-check-label" for="userMaleRadio">M</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="userFemaleRadio" value="Female">
        <label class="form-check-label" for="userFemaleRadio">F</label>
      </div>
    </div>
    <div class="mb-3">
      <label for="userFirstnameInput" class="form-label">Firstname</label>
      <input
          v-model="firstname"
          type="text"
          class="form-control"
          id="userFirstnameInput"
          aria-describedby="userFirstnameHelp"
      />
    </div>
    <div class="mb-3">
      <label for="userLastnameInput" class="form-label">Lastname</label>
      <input
          v-model="lastname"
          type="text"
          class="form-control"
          id="userLastnameInput"
          aria-describedby="userLastnameHelp"
      />
    </div>
    <div class="mb-3">
      <label for="emailInput" class="form-label">Email</label>
      <input
          v-model="email"
          type="email"
          class="form-control"
          id="emailInput"
          aria-describedby="userLastnameHelp"
      />
    </div>
    <button type="submit" class="btn btn-success"><font-awesome-icon :icon="['fas', 'floppy-disk']" class="me-2" /> Save</button>
  </form>
</template>

<script>

</script>

<style scoped>

</style>