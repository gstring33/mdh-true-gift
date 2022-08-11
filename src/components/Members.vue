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
          <div class="row align-items-start mb-md-3">
            <div class="col col-12 col-md-4">
              <img
                style="width: 50px; position: relative; bottom: 2px"
                src="@/assets/images/user-man-disable.png"
                alt="user-profil"
              />
              <span class="username-profil username-profil_disable">John D.</span>
            </div>
            <div class="col col-12 col-md-4">
              <img
                style="width: 50px; position: relative; bottom: 2px"
                src="@/assets/images/user-man-disable.png"
                alt="user-profil"
              />
              <span class="username-profil username-profil_disable">Patrick C.</span>
            </div>
            <div class="col col-12 col-md-4">
              <img
                style="width: 50px; position: relative; bottom: 2px"
                src="@/assets/images/user-man-disable.png"
                alt="user-profil"
              />
              <span class="username-profil username-profil_disable">Steven V.</span>
            </div>
          </div>
          <div class="row align-items-center mb-md-3">
            <div class="col col-12 col-md-4">
              <img
                style="width: 50px; position: relative; bottom: 2px"
                src="@/assets/images/user-girl-disable.png"
                alt="user-profil"
              />
              <span class="username-profil username-profil_disable">Emily V.</span>
            </div>
            <div class="col col-12 col-md-4">
              <img
                style="width: 50px; position: relative; bottom: 2px"
                src="@/assets/images/user-man-disable.png"
                alt="user-profil"
              />
              <span class="username-profil username-profil_disable">Karl Y.</span>
            </div>
            <div class="col col-12 col-md-4">
              <img
                style="width: 50px; position: relative; bottom: 2px"
                src="@/assets/images/user-girl-success.png"
                alt="user-profil"
              />
              <span class="username-profil username-profil_success">Ella T.</span>
            </div>
          </div>
          <div class="row align-items-end">
            <div class="col col-12 col-md-4">
              <img
                style="width: 50px; position: relative; bottom: 2px"
                src="@/assets/images/user-girl-disable.png"
                alt="user-profil"
              />
              <span class="username-profil username-profil_disable">Stefany L.</span>
            </div>
            <div class="col col-12 col-md-4">
              <img
                style="width: 50px; position: relative; bottom: 4px"
                src="@/assets/images/user-girl-disable.png"
                alt="user-profil"
              />
              <span class="username-profil username-profil_disable">Julia S.</span>
            </div>
            <div class="col col-12 col-md-4">
              <img
                style="width: 50px; position: relative; bottom: 2px"
                src="@/assets/images/user-girl-disable.png"
                alt="user-profil"
              />
              <span class="username-profil username-profil_disable">Sophie K.</span>
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
import { ref } from "vue";

const isPartnerNotSelected = ref(false)
const isPartnersListPublished = ref(false)

</script>

<style lang="scss">
.username-profil {
  margin-left: 8px;
  &_disable {
    color: #dee2e6;
  }

  &_success {
    color: white;
    font-weight: 500;
    padding: 8px 16px;
    border: 1px solid #198754;
    background-color: #198754;
    border-radius: 6px;
  }
}
</style>
