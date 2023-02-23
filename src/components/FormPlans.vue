<script setup>
const rootImagesPath = "../assets/images/"

</script>

<template>
  <section class="card plans">

    <div class="card__header">
      <h2 class="title">Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
    </div>

    <div class="card__main">
      <div class="radio-group" v-for="(plan, index) in $store.state.plans" :key="index">
        <img :src="`${rootImagesPath}/${plan.icon}`" alt="icon plan">
        <input type="radio" :id="plan.title" :value="plan.title" v-model="$store.state.selectedPlan" />
        <label :for="plan.title">{{ plan.title }}</label>
        <h3>{{ plan.price }} <span>{{ $store.state.selectedOptions == 'monthly' ? 'mo' : 'yr' }}</span></h3>
      </div>
    </div>

    <div class="card__footer">
      <select v-model="$store.state.selectedOptions">
        <option v-for="option in $store.state.options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <div>Selected: {{ $store.state.selectedOptions }}</div>
    </div>

  </section>
</template>

<style scoped>
input[type="radio"] {
  display: none;
}

.card__main {
  margin-bottom: 3rem;
}

.card__main>div {
  padding: 1rem;
  border: 1px solid var(--gray_100);
  border-radius: 6px;
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
