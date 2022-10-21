<template>
  <div class="container">
    <div class="card mb-3">
      <div class="card-header py-3 lead">Teilnehmer (9)</div>
      <div class="card-body">
        <div class="alert alert-warning" role="alert">
          <h4 class="alert-heading">Noch ein wenig Geduld ...</h4>
          <p>Ella hat ihre Liste noch nicht veröffentlicht. Bitte logge dich später erneut ein, um Ellas Liste zu sehen.</p>
        </div>
        <div class="row mb-4">
          <div v-for="(partnerLine, index) in partnersNormalized" class="row mb-md-3" :class="index == partnerLine.length - 1 ? 'align-items-end' : 'align-items-start'">
            <div v-for="partner in partnerLine" class="col col-12 col-md-4">
              <MemberItem :partner="partner" :isSelectionAllowed="isSelectionAllowed" :image="partner.img"/>
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
import { ref, computed } from "vue";
import MemberItem from './MemberItem.vue'

// ---------- Refs
const isPartnerNotSelected = ref(false)
const isPartnersListPublished = ref(false)
const isSelectionAllowed = ref(false)
const partners = ref([
  {name: 'Sophie K.', gender: 'F', img:"user-girl-disable", isSelected: false},
  {name: 'Karl D.', gender: 'M', img:"user-man-disable", isSelected: false},
  {name: 'Mats W.', gender: 'M', img:"user-man-disable", isSelected: false},
  {name: 'Julia S.', gender: 'F', img:"user-girl-disable", isSelected: false},
  {name: 'Tatiana R.', gender: 'F', img:"user-girl-success", isSelected: true},
  {name: 'Suzanne E.', gender: 'F', img:"user-girl-disable", isSelected: false},
  {name: 'Kentin N.', gender: 'M', img:"user-man-disable", isSelected: false},
  {name: 'Frank. D', gender: 'M', img:"user-man-disable", isSelected: false},
  {name: 'Simone A.', gender: 'F', img:"user-girl-disable", isSelected: false},
  {name: 'Georg Q.', gender: 'M', img:"user-man-disable", isSelected: false},
])

// ---------- Computed
const partnersNormalized = computed(() => {
  const partnersArr  = []
  let partnerLine = [];
  partners.value.forEach((p) => {
    partnerLine.push(p)
    if(partnerLine.length === 3) {
      partnersArr.push(partnerLine)
      partnerLine = []
    }
  })

  return partnersArr
})
</script>
