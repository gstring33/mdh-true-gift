<template>
  <form>
    <div class="mb-3">
      <label for="wishInputTitle" class="form-label">Titel</label>
      <input
        v-model="gift.title.value"
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
        v-model="gift.description.value"
        class="form-control"
        id="wishTextareaDescription"
        rows="3"
      ></textarea>
    </div>
    <div class="mb-3">
      <label for="wishInputLink" class="form-label">Link</label>
      <input
        v-model="gift.link.value"
        type="text"
        placeholder="ex: https://amazon.de"
        class="form-control"
        id="wishInputLink"
        aria-describedby="wishLinkHelp"
      />
    </div>
    <button @click.prevent="$emit('updateGift', gift)" type="submit" class="btn btn-success">
      <font-awesome-icon v-if="!submitted" :icon="['fas', 'floppy-disk']" class="me-2" />
      Speichern
    </button>
  </form>
</template>

<script setup>
import { ref, defineProps } from "vue";

// ---------- Props
const props = defineProps({
  wish: Object,
});

// ---------- Refs
const gift = {
  title: ref(props.wish.title),
  description: ref(props.wish.description),
  link: ref(props.wish.link),
  uuid: props.wish.uuid
}

</script>
