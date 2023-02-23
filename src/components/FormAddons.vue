<script setup>

</script>

<template>
  <section class="card addons">

    <div class="card__header">
      <h2> Pick add-ons</h2>
      <p> Add-ons help enhance your gaming experience.</p>
    </div>

    <div class="card__main">
      <div class="checkbox-group" :class="{ active: $store.state.addonsSelected == addon.title }"
        v-for="(addon, index) in $store.state.addons" :key="index">
        <input type="checkbox" :id="addon.titleSlug" :value="addon.title" v-model="$store.state.addonsSelected" />
        <div class="checkbox-details">
          <label :for="addon.titleSlug">{{ addon.title }}</label>
          <p>{{ addon.description }}</p>
        </div>
        <h3>{{ addon.price }} <span>/mo</span></h3>
      </div>
    </div>

  </section>
</template>

<style scoped>
.checkbox-group {
  display: grid;
  grid-template-columns: auto 2fr auto;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--gray_100);
  border-radius: 6px;
}

input {
  width: auto;
  margin-right: 2rem;
}

label {
  margin-bottom: 0.4rem;
}
</style>
