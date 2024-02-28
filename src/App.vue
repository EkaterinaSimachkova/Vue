<template>
  <div>
    <header class="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
      <my-input @change-value="inputValue=$event"/>
      <my-button @btn-click="search">Найти</my-button>
    </header>
    <div class="d-flex flex-row justify-content-around mb-3">
        <my-radio v-for="api in apis" :obj="api" @change-radio="apiChecked"/>
    </div>
    <my-content :images="images"/>
  </div>
</template>

<script>
import MyInput from '@/components/MyInput.vue'
import MyRadio from '@/components/MyRadio.vue'
import MyButton from '@/components/MyButton.vue'
import MyContent from '@/components/MyContent.vue'

import getRickAndMortyCharacters from '@/functions/getRickAndMortyCharacters.js'
import getPokemonCharacters from '@/functions/getPokemonCharacters.js'
import getDogs from '@/functions/getDogs.js'


export default {
  components: {
    MyInput,
    MyRadio,
    MyButton,
    MyContent
  },
  data() {
    return {
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

      images: []
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
          this.setImages(this.checkedApi)
      } else if (+this.inputValue > 0) {
          this.setImages(this.checkedApi, +this.inputValue)
      } else {
          alert('Введено отрицательное число или ноль!')
      }
    },
    async setImages(api, count = 12) {
      try {
          switch (api) {
              case 'RickAndMorty':
                  this.images = await getRickAndMortyCharacters(count)
                  break
              case 'Pokemon':
                  this.images = await getPokemonCharacters(count)
                  break
              case 'Dog':
                  this.images = await getDogs(count)
                  break
          }

          console.log(this.images)
          console.log(typeof(this.images))

      } catch(err) {
          console.log(err)
      }
    }
  }
}
</script>

<style>
#app {
  margin: 50px;
}
</style>
