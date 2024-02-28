<template>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="radio-button" checked :value="obj.name" :key="obj.id" v-model="radioChecked" @change="changeRadio">
        <label class="form-check-label">{{ obj.name }}</label>
    </div>
</template>

<script>
    export default {
        props: {
            obj: {
                type: Object,
                require: true
            }
        },
        data() {
            return {
                radioChecked: null,
            }
        },
        methods: {
            changeRadio() {
                this.$emit('changeRadio', this.radioChecked)
            }
        }
    }
</script>

<style scoped>

</style>