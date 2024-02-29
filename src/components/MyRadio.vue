<template>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="radio-button" :value="obj.name" :key="obj.id" v-model="radioChecked" @change="changeRadio">
        <label class="form-check-label">{{ obj.name }}</label>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    obj: {
        type: Object,
        require: true
    }
})

const emit = defineEmits(['changeRadio'])

const radioChecked = ref(null)

const changeRadio = () => {
    emit('changeRadio', radioChecked.value)
}
    
</script>

<style scoped>

</style>