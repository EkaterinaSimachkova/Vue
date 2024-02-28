<template>
    <div>
        <h3 v-if="favStore.favs.length == 0">В избранном пока ничего нет!</h3>
        <my-fav-content v-else :images="favStore.favs"/>
    </div>
</template>

<script>
import MyFavContent from '@/components/MyFavContent.vue'
import { useFavStore } from '@/stores/FavStore.js'
  
  
export default {
    components: {
      MyFavContent
    },
    data() {
      return {
        favStore: useFavStore()
      }
    }
}

</script>

<style scoped>

</style>