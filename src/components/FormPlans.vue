<script setup>
</script>

<template>
  <section class="card plans">
    <h2 class="title">Select your plan</h2>
    <p>You have the option of monthly or yearly billing.</p>
    <div class="radio-group" v-for="(plan, index) in $store.state.plans" :key="index">
      <input type="radio" :id="plan.title" :value="plan.title" v-model="$store.state.selectedPlan" />
      <label :for="plan.title">{{ plan.title }}</label>
      <h3>{{ plan.price }} <span>/mo</span></h3>
    </div>
    <select v-model="$store.state.selected">
      <option v-for="option in $store.state.options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <div>Selected: {{ $store.state.selected }}</div>
  </section>
</template>

<style scoped>
#form-plans {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

input[type="radio"] {
  display: none;
}

label {
  cursor: pointer;
}
</style>
