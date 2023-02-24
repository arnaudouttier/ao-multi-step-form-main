<script setup>

</script>

<template>
  <section class="card plans">

    <div class="card__header">
      <h2 class="title">Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
    </div>

    <div class="card__main">
      <div class="radio-group" v-for="(plan, index) in $store.state.plans" :key="index">
        <img :src="`/src/assets/images/${plan.icon}`" alt="icon plan">
        <input type="radio" :id="plan.title" :value="plan.title" v-model="$store.state.selectedPlan" />
        <label :for="plan.title">{{ plan.title }}</label>
        <h3>{{ plan.price }} <span>{{ $store.state.selectedPlanOptions ? 'yr' : 'mo' }}</span></h3>
      </div>
    </div>

    <div class="card__footer">
      <p :class="{ active: $store.state.selectedPlanOptions }">Monthly</p>
      <input type="checkbox" id="plan-checkbox" v-model="$store.state.selectedPlanOptions">
      <label for="plan-checkbox"></label>
      <p :class="{ active: !$store.state.selectedPlanOptions }">Yearly</p>
    </div>

  </section>
</template>

<style lang="scss" scoped>
input {
  display: none;
}

label {
  cursor: pointer;
}

.card__main {
  margin-bottom: 3rem;
}

.card__main>div {
  padding: 1rem;
  border: 1px solid var(--gray_100);
  border-radius: 6px;
}

.card__footer {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  padding-block: 1rem;
  border-radius: 4px;
  background-color: var(--alabaster);

  p.active {
    color: var(--blue_400);
  }
}

@media(min-width:992px) {
  .card__main {
    flex-direction: row;
    column-gap: 1rem;
  }

  .card__main>div {
    flex: 1;
  }
}
</style>
