<template>
    <button class="btn btn-dark" type="button" @click="btnClick"><slot></slot></button>
</template>

<script>
    export default {
        methods: {
            btnClick() {
                this.$emit('btnClick')
            }
        }
    }
</script>

<style scoped>

</style>