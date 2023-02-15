<script setup>
</script>

<template>
  <div class="card summary">
    <h2>Finishing up</h2>
    <p>Double-check everything looks OK before confirming.</p>

    <div class="summary-plan">
      <div class="group">
        <h2 class="plan-title">{{ $store.state.userName }}</h2>
        <button class="btn">Change</button>
      </div>
      <h3 class="total"></h3>
    </div>

    <div class="summary-addons">
      <div class="addon-title"> {{ $store.state.userEmail }}</div>
      <h3 class="total"></h3>
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
