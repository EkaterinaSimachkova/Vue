<template>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="api" checked :value="api.name" :key="api.id" v-model="apiChecked" @change="changeApi">
        <label class="form-check-label">{{ api.name }}</label>
    </div>
</template>

<script>
    export default {
        props: {
            api: {
                type: Object,
                require: true
            }
        },
        data() {
            return {
                apiChecked: null,
            }
        },
        methods: {
            changeApi() {
                this.$emit('changeApi', this.apiChecked)
            }
        }
    }
</script>

<style scoped>

</style>