<template>
  <div class="container mt-5">
    <div class="card mb-3">
      <div class="card-header lead py-3">Meine Liste</div>
      <!-- Modal Update gift -->
      <div class="card-body">
        <div v-if="gifts.length === 0" class="lead mb-3"  role="alert">
          <font-awesome-icon :icon="['fas', 'triangle-exclamation']" class="me-2" /> Du hast noch keine Wünsche hinzugefügt...
        </div>
        <ol v-else class="list-group mb-4">
          <li v-for="gift in gifts" class="list-group-item" :key="gift.uuid">
            <div class="col col-12 mt-3">
              <div class="fw-bold">{{ gift.title }}</div>
              <p class="mt-3">{{ gift.description }}</p>
              <a v-if="gift.link" :href="gift.link" target=_blank class="btn btn-sm btn-primary">
                <font-awesome-icon :icon="['fas', 'eye']" class="me-2" />
                Meinen Wunsch sehen
              </a>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end my-3">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  @click="openOffCanvas(gift)"
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWishFormUpdate"
                >
                  <font-awesome-icon :icon="['fas', 'marker']" class="me-1" />
                </button>
                <button
                  @click="openModalDelete(gift)"
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                  ref="wisch1"
                >
                  <font-awesome-icon :icon="['fas', 'trash-can']" class="me-1" />
                </button>
              </div>
            </div>
          </li>
        </ol>
        <button
          type="button"
          class="btn btn-success"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWishFormCreate"
          aria-controls="offcanvasBottom"
        >
          <font-awesome-icon :icon="['fas', 'cart-plus']" class="me-2" /> Einen Wunsch hinzufügen
        </button>
        <button
            type="button"
            class="btn btn-outline-success mx-3"
            data-bs-toggle="modal"
            data-bs-target="#confirmModal"
        >
          <font-awesome-icon :icon="['fas', 'paper-plane']" class="me-2" /> Liste veröffentlichen
        </button>
      </div>
    </div>
    <Teleport to="#modals">
      <!-- Modal delete --->
      <div
        class="modal fade"
        id="deleteModal"
        tabindex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              Möchtest du den folgenden Wunsch wirklich löschen: <br />
              <b>{{ currentWish?.title }}</b>
            </div>
            <div v-if="successfullyDeleted" class="alert alert-success alert-dismissible fade show m-3" role="alert">
              Dein Wunsch wurde korrekt gespeichert
            </div>
            <div v-if="!successfullyUpdated" class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                <font-awesome-icon :icon="['fas', 'xmark']" class="me-2" />Nein
              </button>
              <button @click="deleteGift" type="button" class="btn btn-success">
                <span v-if="requestStore.load" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                <font-awesome-icon v-else :icon="['fas', 'check']" class="me-2" />
                Ja
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal publish list -->
      <div
          class="modal fade"
          id="confirmModal"
          tabindex="-1"
          aria-labelledby="confirmModalLabel"
          aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-warning">
              <h5 class="modal-title" id="confirmHeaderModalLabel"><font-awesome-icon :icon="['fas', 'triangle-exclamation']" class="me-2" /> Achtung</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="lead">Wenn du die Veröffentlichung bestätigst:</p>
              <ul>
                <li>wird deine Liste <b>per E-Mail an deinen Partner gesendet</b>, ist auch <b>auf seinem Dashboard verfügbar.</b></li>
                <li>Deine Liste wird geschlossen und du kannst <b>keine neuen Wünsche mehr bearbeiten oder hinzufügen.</b></li>
              </ul>

              <p>Möchtest du die Veröffentlichung deiner Liste bestätigen?</p>
            </div>
            <div class="modal-footer">
              <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
              >
                <font-awesome-icon :icon="['fas', 'xmark']" class="me-2"/>Nein
              </button>
              <button
                  type="button"
                  class="btn btn-success">
                <font-awesome-icon :icon="['fas', 'check']" class="me-2" />Veröffentlichen
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
    <Teleport to="#offCanvas">
      <!-- Update -->
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasWishFormUpdate"
        aria-labelledby="offcanvasWishFormUpdateLabel"
        data-bs-backdrop="true"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWishFormUpdateLabel">
            <span><font-awesome-icon :icon="['fas', 'marker']" class="me-2" />Wunsch bearbeiten</span>
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div v-if="successfullyUpdated" class="alert alert-success alert-dismissible fade show" role="alert">
            Dein Wunsch wurde korrekt gespeichert
          </div>
          <WishUpdateForm v-if="currentWish" :wish="currentWish" @update-gift="updateGift"/>
        </div>
      </div>
      <!-- Create -->
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasWishFormCreate"
        aria-labelledby="offcanvasWishFormCreateLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWishFormCreateLabel">
            <span><font-awesome-icon :icon="['fas', 'cart-plus']" class="me-2" />Wunsch erstellen</span>
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <WishCreateForm/>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import {onMounted, ref, toRaw} from "vue";
import WishCreateForm from "./form/WishCreateForm.vue";
import WishUpdateForm from "./form/WishUpdateForm.vue";
import { fetcher } from "@/helpers/fetcher.js";
import { useRequestStore} from "@/stores/request.store";

// ----------- Props
const props = defineProps({
  giftList: Object
})

// ----------- Life Cycle
onMounted(function () {
  const canvas = document.querySelectorAll('.offcanvas')
  canvas.forEach((el) => {
    el.addEventListener('hidden.bs.offcanvas', function () {
      currentWish.value = null;
      successfullyUpdated.value = false;
    })
  })

  const modals = document.querySelectorAll('.modal')
  modals.forEach((el) => {
    el.addEventListener('hidden.bs.modal', function () {
      currentWish.value = null;
      successfullyDeleted.value = false;
    })
  })
})

// ----------- Ref
const currentWish = ref(null);
const gifts = ref(props.giftList)
const successfullyUpdated = ref(false)
const successfullyDeleted = ref(false)

// ----------- Stores
const requestStore = useRequestStore()

// ----------- Methods
const openModalDelete = (wish) => {
  currentWish.value = wish;
};

const openOffCanvas = (wish) => {
  if (wish) {
    currentWish.value = wish;
  }
};

const updateGift = async function (gift) {
  requestStore.load = true;
  const newGift = {
    title: gift.title.value,
    description: gift.description.value,
    link : gift.link.value,
    uuid : gift.uuid
  };
  await fetcher.put(import.meta.env.VITE_API_BASE_URL + '/api/gift/' + currentWish.value.uuid, newGift)
  successfullyUpdated.value = true;
  let currentListToRaw = toRaw(gifts.value);
  const newList = currentListToRaw.map(function(el) {
    return el.uuid === newGift.uuid ? newGift : el;
  })
  gifts.value = newList;
  requestStore.load = null;
}

const deleteGift = async function () {
  requestStore.load = true;
  await fetcher.delete(import.meta.env.VITE_API_BASE_URL + '/api/gift/' + currentWish.value.uuid);
  successfullyDeleted.value = true;
  requestStore.load = null;
}

</script>
