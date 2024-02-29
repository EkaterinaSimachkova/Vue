<template>
    <div class="input-group">
        <img class="search-icon input-group-text" src="@/assets/Icon-search.jpg"/>
        <input class="form-control" type="number" placeholder="Количество элементов" v-model="inputValue" @input="changeValue">
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['changeValue'])

const inputValue = ref('')

const changeValue = () => {
    emit('changeValue', inputValue.value)
}

</script>

<style scoped>
.search-icon {
    width: 50px;
    height: 40px;
}
</style>