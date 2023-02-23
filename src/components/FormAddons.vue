<script setup>

</script>

<template>
  <section class="card addons">

    <div class="card__header">
      <h2> Pick add-ons</h2>
      <p> Add-ons help enhance your gaming experience.</p>
    </div>


    <div class="checkbox-group" v-for="(addon, index) in $store.state.addons" :key="index">
      <input type="checkbox" :id="addon.titleSlug" :value="addon.title" v-model="$store.state.addonsSelected" />
      <label :for="addon.titleSlug">{{ addon.title }}</label>
      <h3>{{ addon.price }} <span>/mo</span></h3>
    </div>
  </section>
</template>

<style scoped>
input[type="checkbox"] {
  display: none;
}
</style>
