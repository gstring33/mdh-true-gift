<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Logo</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="btn-group">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Einstellungen
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><h6 class="dropdown-header">Einstellungen</h6></li>
                    <li class="dropdown-item"><h5>John Doe</h5></li>
                    <li class="dropdown-item">john.doe@email.de</li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Item 1</a></li>
                    <li><a class="dropdown-item" href="#">Item 2</a></li>
                    <li><a class="dropdown-item" href="#">Item 3</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Logout</a></li>
                </ul>
            </div>

        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>

</style>
