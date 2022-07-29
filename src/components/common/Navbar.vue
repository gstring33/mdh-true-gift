<template>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <RouterLink class="navbar-item" to="/"> True-gift</RouterLink>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <RouterLink class="navbar-item" to="/">Home</RouterLink>
            </div>
            <div class="navbar-item navbar-start">
                <div class="select">
                    <select>
                        <option>Select Events</option>
                        <option>Christmas in Germany</option>
                        <option>Christmas in France</option>
                    </select>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <!--<a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>-->
                        <RouterLink class="button is-light" to="/login">Log in</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { RouterLink } from "vue-router";
</script>

<style scoped>

</style>