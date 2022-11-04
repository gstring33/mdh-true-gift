<template>
  <div class="container">
    <div class="py-3 lead">Users (6)</div>
    <table class="table caption-top">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">email</th>
        <th scope="col">Firstime connected at</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users">
          <th scope="row">{{ index++}}</th>
          <td>{{user.name}}</td>
          <td>{{ user.email }}</td>
          <td v-if="user.firstTimeConnected">{{ user.firstTimeConnected }}</td>
          <td v-else><font-awesome-icon :icon="['fas', 'circle-pause']" class="me-2 wait-for-user" /></td>
        </tr>
      </tbody>
    </table>
    <button type="button"
            class="btn btn-success"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCreateUser"
            aria-controls="offcanvasBottom">
      <font-awesome-icon :icon="['fas', 'plus']" class="me-2" /> Create user
    </button>
  </div>
  <Teleport to="#offCanvasAdmin">
    <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasCreateUser"
        aria-labelledby="offcanvasCreateUserFormLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasCreateUserFormLabel">
          <span> <font-awesome-icon :icon="['fas', 'marker']" class="me-2" />Create user</span>
        </h5>
        <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <UserCreateForm/>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import {ref } from "vue";
import UserCreateForm from "@/components/form/UserCreateForm.vue";

const users = ref([
  {name: 'Sophie K.', email: 'test@test.com', firstTimeConnected: "April, 19 2022"},
  {name: 'Karl W.', email: 'test@test.com', firstTimeConnected: "April, 19 2022"},
  {name: 'Jack S.', email: 'test@test.com', firstTimeConnected: false},
  {name: 'Steffi C.', email: 'test@test.com', firstTimeConnected: "April, 19 2022"},
  {name: 'Edward G.', email: 'test@test.com', firstTimeConnected: false},
  {name: 'Emily A.', email: 'test@test.com', firstTimeConnected: "April, 19 2022"}
])
</script>

<style scoped>
  .wait-for-user {
    color: #fd9843;
  }
</style>
