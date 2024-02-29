<template>
  <div>
    <header class="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
      <my-input @change-value="inputValue=$event"/>
      <my-button @btn-click="search">Найти</my-button>
    </header>
    <div class="d-flex flex-row justify-content-around mb-3">
        <my-radio v-for="api in favStore.apis" :obj="api" @change-radio="apiChecked"/>
    </div>
    <my-fav-content :images="favStore.images"/>
  </div>
</template>

<script setup>
import MyInput from '@/components/MyInput.vue'
import MyRadio from '@/components/MyRadio.vue'
import MyButton from '@/components/MyButton.vue'
import MyFavContent from '@/components/MyFavContent.vue'

import { ref, onBeforeMount } from 'vue'
import { useFavStore } from '@/stores/FavStore.js'

const favStore = useFavStore()

const checkedApi = ref('Dog')
const inputValue = ref('')

const apiChecked = (api) => {
  checkedApi.value = api
  search()
}

const search = () => {
  if (checkedApi.value === null) {
    alert('Не выбрано ни одно из API!')
  } else if (inputValue.value == '') {
      favStore.setImages(checkedApi.value)
  } else if (+inputValue.value > 0) {
      favStore.setImages(checkedApi.value, +inputValue.value)
  } else {
      alert('Введено отрицательное число или ноль!')
  }
}

</script>

<style scoped>

</style>
