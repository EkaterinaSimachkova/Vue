<template>
    <div class="d-flex flex-column justify-content-center mx-5 mt-5">
        <div class="container m-0 p-0">
            <div class="main-content">
                <div v-for="image in images" :style="{width: 'calc((100% - 80px) / 4)', marginBottom: '50px'}">
                    <my-card :image="image" :cardClass="''"/>
                    <div class="d-flex flex-row justify-content-between mt-2">
                        <my-button @btn-click="$router.push(`/${image.id}`)">Подробнее</my-button>
                        <div>
                            <my-button v-if="!image.isFav" @btn-click="favStore.toggleFav(image.id)">❤️️</my-button>
                            <my-button v-else @btn-click="favStore.toggleFav(image.id)">💔</my-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyCard from './MyCard.vue'
import MyButton from './MyButton.vue'

import { useFavStore } from '@/stores/FavStore.js'


    export default {
        props: {
            images: {
                type: Object,
                require: true
            }
        },
        components: {
            MyCard,
            MyButton
        },
        data() {
            return {
                 favStore: useFavStore(),
            }
        },
        
    }
</script>

<style scoped>
.main-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    column-gap: 25px;
}
</style>