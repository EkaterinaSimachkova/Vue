<template>
    <div :class="cardClass" :style="{height: '300px'}"> 
        <img class='image-icon' :src="image.url" :key="image.id"/>
        <p class='image-title'>{{image.name.length > 20 ? image.name.slice(0, 20) + "…" : image.name}}</p>
        <div v-if="showButtons" class="d-flex flex-row justify-content-between">
            <my-button @btn-click="btnInfo">Подробнее</my-button>
            <div>
                <my-button v-if="!image.isFav" @btn-click="btnFav">❤️️</my-button>
                <my-button v-else @btn-click="btnFav">💔</my-button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import MyButton from './MyButton.vue'

    const props = defineProps({
        image: {
            type: Object,
            require: true
        },
        cardClass: {
            type: String,
            require: true
        },
        showButtons: {
            type: Boolean,
            require: true
        }
    })

    const emit = defineEmits(['btnInfo', 'btnFav'])

    const btnInfo = () => {
        emit('btnInfo', props.image.id)
    }

    const btnFav = () => {
        emit('btnFav', props.image.id)
    }
    
</script>

<style scoped>
.image-class {
    width: calc((100% - 80px) / 4);
}

.image-icon {
    padding: 5px;

    width: 100%;
    height: 90%;
    object-fit: cover;

    border: 2px solid #F5F6F7;
    box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
    border-radius: 10px;
}

.image-title {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    padding: 5px;
}
</style>