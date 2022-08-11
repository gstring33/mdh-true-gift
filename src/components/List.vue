<template>
    <div class="container mt-5">
        <div class="card mb-3 ">
            <div class="card-header display-6 py-3">Meine Liste</div>
            <div class="card-body">
                <div class="alert alert-warning" role="alert">
                    Du hast noch keine Wünsche hinzugefügt
                </div>
                <ol class="list-group mb-4">
                    <li v-for="(item, index) in wishes" class="list-group-item">
                        <div class="col col-12 mt-3">
                            <div class="fw-bold">{{ item.title}}</div>
                            Lorem ipsum dolor sit amet, sed diam yonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end my-3">
                            <div class="btn-group " role="group" aria-label="Basic mixed styles example">
                                <button type="button" class="btn btn-secondary btn-sm">Bearbeiten</button>
                                <button @click="openModal(item.title, `wish-${index}`)" type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal" ref="wisch1">
                                    Entfernen
                                </button>
                            </div>
                        </div>
                    </li>
                </ol>
                <button type="button" class="btn btn-primary">Einen Wunsch hinzufügen</button>
            </div>
        </div>
        <Teleport to="#modals">
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            {{ modalTitle }} - {{ modalId }}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nein</button>
                            <button type="button" class="btn btn-danger">Entfernen</button>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    const modalTitle = ref(null)
    const modalId = ref(null)

    const wishes = ref([
        {title: "wisch1"},
        {title: "wisch2"},
        {title: "wisch3"}
    ])

    const openModal = (title, id) => {
        modalTitle.value = title
        modalId.value = id
    }
</script>

<style scoped>

</style>