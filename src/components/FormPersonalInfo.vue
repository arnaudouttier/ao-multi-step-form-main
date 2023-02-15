<script setup>
</script>

<template>
  <div class="card personal-info">
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

<style scoped >

</style>
