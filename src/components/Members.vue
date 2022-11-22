<template>
  <div class="container">
    <div v-if="user.isPartnerListPublished" class="tg-alert tg-alert-warning" role="alert">
      <b><font-awesome-icon :icon="['fas', 'triangle-exclamation']" class="me-1"/> Noch ein wenig Geduld...</b> Ella hat ihre Liste noch nicht veröffentlicht. Bitte logge dich später erneut ein, um Ellas Liste zu sehen.
    </div>
    <div class="card mb-3">
      <div class="card-header py-3 lead">Teilnehmer ({{ totalUsers }})</div>
      <div class="card-body">
        <div class="row mb-4">
          <div v-for="(userLine, index) in users" class="row mb-md-3" :class="index == userLine.length - 1 ? 'align-items-end' : 'align-items-start'">
            <div v-for="user in userLine" class="col col-12 col-md-4">
              <MemberItem :user="user"/>
            </div>
          </div>
        </div>
        <button v-if="!user.isPartnerSelected" type="button" class="btn btn-success">
          Einen Partner auswählen
        </button>
        <button v-if="user.isPartnerSelected && user.isPartnerListPublished" type="button" class="btn btn-success disabled">Liste von <b>Ella</b> ansehen</button>
      </div>
    </div>
  </div>
</template>

<script setup>

import MemberItem from './MemberItem.vue'
import { useAuthStore } from "@/stores/auth.store.js";

const { user } = useAuthStore();

const props = defineProps({
  users: Object,
  totalUsers: Number
})


</script>
