<script setup>
</script>

<template>
  <section class="card summary">

    <div class="card__header">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
    </div>
    <!-- .card__header -->

    <div class="card__main">

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

    </div>
    <!-- .card__main -->

    <div class="card__footer">
      <div class="summary-total">
        <h2>Total <span></span></h2>
        <div class="summary-total-bill">
        </div>
      </div>
    </div>
    <!-- .card__footer -->

  </section>
  <!-- .card.summary -->
</template>

<style lang="scss" scoped>
.card__main {
  padding: 1rem;
  border-radius: 6px;
  background-color: var(--alabaster);
  margin-bottom: 2rem;
  font-size: 1rem;
}

.summary-plan {
  padding-bottom: 0.7rem;
  border-bottom: 1px solid var(--gray_100);

  .btn {
    font-weight: 400;
    color: var(--gray_200);
    text-decoration: underline;
  }
}

.summary-addons {
  display: flex;
  justify-content: space-between;
}
</style>
