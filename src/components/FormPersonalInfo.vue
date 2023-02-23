<script setup>
</script>

<template>
  <div class="card personal-info">
    <div class="card__header">
      <h2> Personnal info</h2>
      <p>Please provide your name, address, and phone number.</p>
    </div>

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
</template>

<style  lang="scss"></style>
