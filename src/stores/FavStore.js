import { defineStore } from 'pinia'
import { ref, reactive, computed, watch } from 'vue'
import getRickAndMortyCharacters from '@/functions/getRickAndMortyCharacters.js'
import getPokemonCharacters from '@/functions/getPokemonCharacters.js'
import getDogs from '@/functions/getDogs.js'


export const useFavStore = defineStore('favStore', () => {
    const apis = [
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
    ]
    const images = ref([])
    const imagesRickAndMorty = ref([])
    const imagesPokemon = ref([])
    const imagesDog = ref([])    
    
    const imagesInLocalStorage = localStorage.getItem('cards')

    if (imagesInLocalStorage) {
        images.value = JSON.parse(imagesInLocalStorage)._value
        console.log(JSON.parse(imagesInLocalStorage))
    }

    watch(
        () => images, 
        (state) => localStorage.setItem('cards', JSON.stringify(state)), 
        {deep: true}
    )

    const favs = computed(() => {
        return images.value.filter(item => item.isFav)
    })

    const info = (id) => {
        return images.value.find(item => item.id == id)
    }

    const toggleFav = (id) => {
        const idx = images.value.findIndex(item => item.id == id)
        images.value[idx].isFav = !images.value[idx].isFav
    }
    
    const setImages = async (api, count = 12) => {
        try {
            switch (api) {
                case 'RickAndMorty':
                    if (count == imagesRickAndMorty.value.length) {
                        images.value = imagesRickAndMorty.value
                    } else {
                        images.value = imagesRickAndMorty.value = await getRickAndMortyCharacters(count)
                    }            
                    break

                case 'Pokemon':
                    if (count == imagesPokemon.value.length) {
                        images.value = imagesPokemon.value
                    } else {
                        images.value = imagesPokemon.value = await getPokemonCharacters(count)
                    } 
                    break

                case 'Dog':
                    if (count == imagesDog.value.length) {
                        images.value = imagesDog.value
                    } else {
                        images.value = imagesDog.value = await getDogs(count)
                    } 
                    break
            }

            for (let item of images.value) {
                item.isFav = false
            }
    
        } catch(err) {
            console.log(err)
        }
    }

    return {
        apis,
        images,
        favs,
        info,
        toggleFav,
        setImages
    }
})