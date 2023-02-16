<script setup>
</script>

<template>
  <div class="card summary">
    <h2>Finishing up</h2>
    <p>Double-check everything looks OK before confirming.</p>

    <div class="summary-plan">
      <div class="group">
        <h2 class="plan-title">{{ $store.state.selectedPlan }} <span>{{
          $store.state.selectedOptions == 'monthly' ? 'mo'
            : 'yr'
        }}</span></h2>
        <button class="btn">Change</button>
      </div>
      <h3 class="total"></h3>
    </div>

    <div class="summary-addons" v-for="(addon, index) in $store.state.addonsSelected" :key="index">
      <div class="addon-title"> {{ addon }} </div>
      <h3 class="total"><span>{{ $store.state.selectedOptions == 'monthly' ? 'mo' : 'yr' }}</span></h3>
    </div>

    <div class="summary-total">
      <h2>Total <span></span></h2>
      <div class="summary-total-bill">
      </div>
    </div>

  </div>

</template>

<style scoped>
p,
h2 {
  margin: 0;
  padding: 0;
}
</style>
