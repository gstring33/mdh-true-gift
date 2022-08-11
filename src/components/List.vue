<template>
    <div class="container mt-5">
        <div class="card mb-3 ">
            <div class="card-header lead py-3">Meine Liste</div>
            <div class="card-body">
                <div v-if="!areThereAnyWishes" class="alert alert-warning" role="alert">
                    Du hast noch keine Wünsche hinzugefügt
                </div>
                <ol class="list-group mb-4">
                    <li v-for="wish in wishes" class="list-group-item">
                        <div class="col col-12 mt-3">
                            <div class="fw-bold">{{ wish.title}}</div>
                            Lorem ipsum dolor sit amet, sed diam yonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end my-3">
                            <div class="btn-group " role="group" aria-label="Basic mixed styles example">
                                <button @click="(openOffCanvas(wish, 'UPDATE'))" type="button" class="btn btn-dark btn-sm" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWishForm" aria-controls="offcanvasBottom">
                                  Bearbeiten
                                </button>
                                <button @click="openModalDelete(wish)" type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal" ref="wisch1">
                                    Entfernen
                                </button>
                            </div>
                        </div>
                    </li>
                </ol>
                <button @click="(openOffCanvas(null, 'CREATE'))" type="button" class="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWishForm" aria-controls="offcanvasBottom">Einen Wunsch hinzufügen</button>
            </div>
        </div>
        <Teleport to="#modals">
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            Möchtest du den folgenden Wunsch wirklich löschen: <br/>
                            <i>'{{ currentWish?.title }}'</i>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nein</button>
                            <button type="button" class="btn btn-success">Ja</button>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
        <Teleport to="#offCanvas">
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWishForm" aria-labelledby="offcanvasWishFormLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasWishFormLabel">{{ formTitle }}</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <WishUpdateForm v-if="wishFormType === 'UPDATE'" :wish="currentWish"/>
              <WishCreateForm v-else/>
            </div>
          </div>
        </Teleport>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import WishCreateForm from './form/WishCreateForm.vue'
    import WishUpdateForm from "./form/WishUpdateForm.vue"

    // ----------- References
    const currentWish = ref(null)
    const wishFormType = ref(null)

    const wishes = ref([
        {id: 1, title: "Lorem ipsum...1", description: "Lorem ispum 1", link: "link 1"},
        {id: 1, title: "Lorem ipsum...2", description: "Lorem ispum 2", link: "link 2"},
        {id: 1, title: "Lorem ipsum..3", description: "Lorem ispum 3", link: "link 3"}
    ])

    // ----------- Computed
    const formTitle = computed(() => {
      return wishFormType.value === "UPDATE" ? "Wunsch bearbeiten" : "Wunsch erstellen"
    })

    const areThereAnyWishes = computed(() => {
      return wishes.value.length > 0
    })

    // ----------- Methods
    const openModalDelete = (wish) => {
      currentWish.value = wish
    }

    const openOffCanvas = (wish, formType) => {
      if (wish) {
        currentWish.value = wish
      }
      wishFormType.value = formType
    }
</script>