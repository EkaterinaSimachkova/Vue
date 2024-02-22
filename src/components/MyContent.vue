<template>
    <div class="d-flex flex-column justify-content-center mx-5">
        <div class="d-flex flex-row">
            <my-button id="button-flex" @btn-click="displayFlex">flex</my-button>
            <my-button id="button-grid" @btn-click="displayGrid">grid</my-button>
        </div>

        <div class="container m-0 p-0">
            <div :class="isFlex ? flexClass : gridClass">
                <my-card v-for="(image, index) in images" :image="image" :cardClass="isFlex ? flexImageClass :
                                                                                    (index % 6 == 4 || index % 6 == 5) ? 
                                                                                    gridBigImageClass : gridSmallImageClass">
                </my-card>
            </div>
        </div>
    </div>
</template>

<script>
import MyCard from './MyCard.vue'
import MyButton from './MyButton.vue'

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
                 isFlex: true,
                 flexClass: "main-content",
                 gridClass: "row row-cols-4",
                 flexImageClass: "image",
                 gridBigImageClass: "col-6",
                 gridSmallImageClass: "col-3",
            }
        },
        methods: {
            displayFlex() {
                this.isFlex = true
            },
            displayGrid() {
                this.isFlex = false
            }
        }
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