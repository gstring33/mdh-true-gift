<template>
  <div class="container">
    <div class="tg-alert tg-alert-warning" role="alert">
      <b><font-awesome-icon :icon="['fas', 'triangle-exclamation']" class="me-1"/> Noch ein wenig Geduld...</b> Ella hat ihre Liste noch nicht veröffentlicht. Bitte logge dich später erneut ein, um Ellas Liste zu sehen.
    </div>
    <div class="card mb-3">
      <div class="card-header py-3 lead">Teilnehmer ({{ total }})</div>
      <div class="card-body">
        <div class="row mb-4">
          <div v-for="(userLine, index) in users" class="row mb-md-3" :class="index == userLine.length - 1 ? 'align-items-end' : 'align-items-start'">
            <div v-for="user in userLine" class="col col-12 col-md-4">
              <MemberItem :user="user"/>
            </div>
          </div>
        </div>
        <button v-if="isPartnerNotSelected" type="button" class="btn btn-success">
          Einen Partner auswählen
        </button>
        <button v-if="!isPartnerNotSelected && isPartnersListPublished" type="button" class="btn btn-success disabled">Liste von <b>Ella</b> ansehen</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import MemberItem from './MemberItem.vue'
import { onBeforeMount } from "vue";
import { fetcher } from "@/helpers/fetcher.js";
import { useAuthStore } from "@/stores/auth.store.js";

const total = ref(null)
const users = ref(null)

onBeforeMount(async () => {
  try {
    const data = await fetcher.get(import.meta.env.VITE_API_BASE_URL + '/api/dashboard/users')
    const usersArr  = []
    let userLine = [];
    data.users.forEach((p) => {
      userLine.push(p)
      if(userLine.length === 3 || (userLine.length === data.total && data.total < 3) ) {
        usersArr.push(userLine)
        userLine = []
      }
    })
    total.value = data.total
    users.value = usersArr

  } catch (error) {
      const { logout } = useAuthStore();
      logout()
  }
})

// ---------- Refs
const isPartnerNotSelected = ref(false)
const isPartnersListPublished = ref(false)

</script>
