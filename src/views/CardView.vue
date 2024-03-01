<template>
    <div class="d-flex flex-column justify-content-center mx-5 mt-5">
        <img :src="favStore.info($route.params.id).url" :key="$route.params.id"/>
        <p><span>ID:</span> {{$route.params.id}}</p>
        <p><span>Название:</span> {{favStore.info($route.params.id).name}}</p>
        <p><span>Ссылка:</span> {{favStore.info($route.params.id).url}}</p>
        <p><span>В избранном:</span> {{favStore.info($route.params.id).isFav ? "Да" : "Нет"}}</p>
    </div>
</template>

<script setup>
import { useFavStore } from '@/stores/FavStore.js'
const favStore = useFavStore()

</script>

<style scoped>
img {
    height: 400px;
    object-fit: contain;
    margin-bottom: 30px;
}
p {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    padding: 5px;
}

span {
    font-weight: 500;
}


</style>