<template>
    <div class="input-group">
        <img class="search-icon input-group-text" src="@/assets/Icon-search.jpg"/>
        <input class="form-control" type="number" placeholder="Количество элементов" v-model="inputValue" @input="changeValue">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputValue: ''
            }
        },
        methods: {
            changeValue() {
                this.$emit('changeValue', this.inputValue)
            }
        }
    }
</script>

<style scoped>
.search-icon {
    width: 50px;
    height: 40px;
}
</style>