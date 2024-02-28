<template>
    <div>
      <header class="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
        <my-input @change-value="inputValue=$event"/>
        <my-button @btn-click="search">Найти</my-button>
      </header>
      <div class="d-flex flex-row justify-content-around mb-3">
          <my-radio v-for="api in apis" :obj="api" @change-radio="apiChecked"/>
      </div>
      <my-fav-content :images="favStore.images"/>
    </div>
  </template>
  
  <script>
  import MyInput from '@/components/MyInput.vue'
  import MyRadio from '@/components/MyRadio.vue'
  import MyButton from '@/components/MyButton.vue'
  import MyFavContent from '@/components/MyFavContent.vue'
  
  import { useFavStore } from '@/stores/FavStore.js'
  
  
  export default {
    components: {
      MyInput,
      MyRadio,
      MyButton,
      MyFavContent
    },
    data() {
      return {
        favStore: useFavStore(),
        apis: [
              { 
                name: 'RickAndMorty',
                id: 1
              },
              {
                name: 'Pokemon',
                id: 2
              },
              {
                name: 'Dog',
                id: 3
              }
            ],
        checkedApi: null,
        inputValue: '',
      }
    },
    beforeMount() {
      this.checkedApi = 'Dog'
      this.search()
    },
    methods: {
      apiChecked(api) {
        this.checkedApi = api
        this.search()
      },
      search() {
        if (this.checkedApi === null) {
          alert('Не выбрано ни одно из API!')
        } else if (this.inputValue == '') {
            this.favStore.setImages(this.checkedApi)
        } else if (+this.inputValue > 0) {
            this.favStore.setImages(this.checkedApi, +this.inputValue)
        } else {
            alert('Введено отрицательное число или ноль!')
        }
      }
    }
  }
  </script>
  
  <style scoped>
 
  </style>
  