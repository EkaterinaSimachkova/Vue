<template>
    <button class="btn btn-outline-secondary" type="button" @click="btnClick"><slot></slot></button>
</template>

<script setup>
const emit = defineEmits(['btnClick'])

const btnClick = () => {
    emit('btnClick')
}

</script>

<style scoped>

</style>
