<template>
  <div>
    <MyNavBar/>
    <router-view/>
  </div>
</template>

<script setup>
import MyNavBar from '@/components/MyNavBar.vue'

</script>

<style>
#app {
  margin: 50px;
  text-align: center;
}
</style>
