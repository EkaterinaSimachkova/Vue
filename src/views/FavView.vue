<template>
    <div>
        <h3 v-if="favStore.favs.length == 0">В избранном пока ничего нет!</h3>
        <my-fav-content v-else :images="favStore.favs"/>
    </div>
</template>

<script setup>
import MyFavContent from '@/components/MyFavContent.vue'
import { useFavStore } from '@/stores/FavStore.js'

const favStore = useFavStore()

</script>

<style scoped>

</style>