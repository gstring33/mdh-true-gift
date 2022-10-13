<template>
  <form>
    <div class="mb-3">
      <label for="wishInputTitle" class="form-label">Titel</label>
      <input
        v-model="title"
        type="text"
        class="form-control"
        id="wishInputTitle"
        aria-describedby="wishTitleHelp"
      />
    </div>
    <div class="mb-3">
      <label for="wishTextareaDescription" class="form-label"
        >Beschreibung</label
      >
      <textarea
        v-model="description"
        class="form-control"
        id="wishTextareaDescription"
        rows="3"
      ></textarea>
    </div>
    <div class="mb-3">
      <label for="wishInputLink" class="form-label">Link</label>
      <input
        v-model="link"
        type="text"
        placeholder="ex: https://amazon.de"
        class="form-control"
        id="wishInputLink"
        aria-describedby="wishLinkHelp"
      />
    </div>
    <button type="submit" class="btn btn-success"><font-awesome-icon :icon="['fas', 'floppy-disk']" class="me-2" /> Speichern</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

// ---------- Refs
const title = ref(null);
const description = ref(null);
const link = ref(null);
</script>
