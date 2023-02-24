<script setup>
</script>

<template>
  <section class="card personal-info">
    <div class="card__header">
      <h2> Personal info</h2>
      <p>Please provide your name, address, and phone number.</p>
    </div>
    <!-- .card__header -->


    <div class="card__main">
      <label>Name
        <input type="text" v-model="$store.state.userName" placeholder="e.g. Stephen King">
      </label>
      <label> Email Address
        <input type="email" v-model="$store.state.userEmail" pattern=".+@globex\.com"
          placeholder="e.g. stephenking@lorem.com">
      </label>
      <label> Phone Number
        <input type="number" v-model="$store.state.userPhone" placeholder="e.g. +1 234 567 890">
      </label>
    </div>
    <!-- .card__main -->

  </section>
  <!-- .card.personal-info -->
</template>

<style  lang="scss" scoped>
input {
  margin-top: 0.7rem;
}
</style>
