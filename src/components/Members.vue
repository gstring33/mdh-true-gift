<template>
  <div class="container">
    <div v-if="isPartnerSelected && partner" class="col-12">
      <h2 class="text-bg-primary p-3">
        {{ partner.firstname }}
        <small class="lead">wird dein Geschenk bekommen </small>
      </h2>
      <div v-if="!partnerList" class="ps-3 mt-3 text-warning" role="alert">
        <font-awesome-icon :icon="['fas', 'triangle-exclamation']" class="me-1"/> Noch ein wenig Geduld... <br>
        <p class="mt-2">{{ partner.firstname }} hat ihre/seine Liste noch nicht veröffentlicht. Bitte logge dich später erneut ein, um {{ partner.firstname}}s Liste zu sehen.</p>
      </div>
    </div>

    <div v-else class="card mb-3">
      <div class="card-header py-3 lead">Teilnehmer ({{ total }})</div>
      <div class="card-body">
        <div class="row mb-4">
          <div v-for="(userLine, index) in members" class="row mb-md-3" :class="index == userLine.length - 1 ? 'align-items-end' : 'align-items-start'">
            <div v-for="user in userLine" class="col col-12 col-md-4">
              <MemberItem :user="user"/>
            </div>
          </div>
        </div>
        <button @click="selectPartner" type="button" class="btn btn-success" :disabled="isSelecting">
          <span v-if="isSelecting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Einen Partner ziehen
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

import MemberItem from './MemberItem.vue'
import {computed, ref} from "vue";
import { fetcher } from "@/helpers/fetcher.js";


const props = defineProps({
  members : Object,
  isPartnerSelected: Boolean,
  total: Number
});

const isSelecting = ref(null);
const isPartnerSelected = ref(props.isPartnerSelected);
const members = ref(props.members);

const partner = computed(() => {
    return isPartnerSelected.value && members.value.length === 1 ? members.value[0] : null;

})

const partnerList = computed(() => {
  return isPartnerSelected.value && members.value.length ===1 && members.value?.list?.gifts.list > 0 ? members.value.list : null;
})

const selectPartner = async function () {
  isSelecting.value = true
  await fetcher.post(import.meta.env.VITE_API_BASE_URL + '/api/user/select-partner')
      .then((response)=> {
        console.log(response)
        isPartnerSelected.value = true;
        members.value = response.users
        isSelecting.value = false;
      })
      .catch((e) => {
        isSelecting.value = false
        console.log(e)
      });

}
</script>
