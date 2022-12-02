<template>
  <form>
    <div class="mb-3">
      <label for="wishInputTitle" class="form-label">Titel</label>
      <input
        v-model="gift.title"
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
        v-model="gift.description"
        class="form-control"
        id="wishTextareaDescription"
        rows="3"
      ></textarea>
    </div>
    <div class="mb-3">
      <label for="wishInputLink" class="form-label">Link</label>
      <input
        v-model="gift.link"
        type="text"
        placeholder="ex: https://amazon.de"
        class="form-control"
        id="wishInputLink"
        aria-describedby="wishLinkHelp"
      />
    </div>
    <button @click.prevent="$emit('updateGift', gift)" type="submit" class="btn btn-success" :disabled="status.update.isLoading">
      <span v-if="status.update.isLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      <font-awesome-icon v-else :icon="['fas', 'floppy-disk']" class="me-2" />
      <span>Speichern</span>
    </button>
  </form>
</template>

<script setup>
import { useGiftStore} from "@/stores/gift.store";

// ---------- Stores
const giftStore = useGiftStore();

// ---------- Ref
const { gift, status } = giftStore

</script>
