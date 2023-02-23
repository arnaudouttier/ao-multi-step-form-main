<script setup>
import Sidebar from './components/Sidebar.vue'
import FormPersonalInfo from './components/FormPersonalInfo.vue'
import FormPlans from './components/FormPlans.vue'
import FormAddons from './components/FormAddons.vue'
import FormSummary from './components/FormSummary.vue'
import PanelControl from './components/PanelControl.vue'
import FormCongratulations from './components/FormCongratulations.vue'


</script>

<template>
  <Sidebar />

  <main id="main">
    <FormPersonalInfo v-if="$store.state.currentStepNumber === 1" />
    <FormPlans v-if="$store.state.currentStepNumber === 2" />
    <FormAddons v-if="$store.state.currentStepNumber === 3" />
    <FormSummary v-if="$store.state.currentStepNumber === 4" />
    <FormCongratulations v-if="$store.state.currentStepNumber === 5" />
  </main>
  <!-- #main -->

  <PanelControl />
</template>

<style lang="scss" >
#app {
  height: 100dvh;
  display: grid;
  grid-template-rows: 20vh auto 10vh;
  grid-template-areas:
    "sidebar"
    "main"
    "panel";
}

#main {
  grid-area: main;
  position: relative;
}


@media (min-width: 992px) {
  #app {
    width: min(80vw, 992px);
    height: 70vh;
    grid-template-columns: 30% 70%;
    grid-template-areas:
      "sidebar main"
      "sidebar main"
      "sidebar panel";
    padding: 1rem;
    background-color: var(--white);
    border-radius: 1rem;
  }

}
</style>
