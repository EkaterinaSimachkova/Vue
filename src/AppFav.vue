<template>
  <div>
    <MyNavBar/>
    <router-view/>
  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue'


export default {
  components: {
    MyNavBar
  },
  
}
</script>

<style>
#app {
  margin: 50px;
  text-align: center;
}
</style>
