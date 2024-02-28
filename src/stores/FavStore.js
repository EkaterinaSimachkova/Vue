import { defineStore } from 'pinia'
import getRickAndMortyCharacters from '@/functions/getRickAndMortyCharacters.js'
import getPokemonCharacters from '@/functions/getPokemonCharacters.js'
import getDogs from '@/functions/getDogs.js'


export const useFavStore = defineStore('favStore', {
    state: () => ({
          images: []
    }),
    getters: {
        favs() {
            return this.images.filter(item => item.isFav)
        }
    },
    actions: {
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

                for (let item of this.images) {
                    item.isFav = false
                }
        
                console.log(this.images)
                console.log(typeof(this.images))
        
            } catch(err) {
                console.log(err)
            }
        },
        toggleFav(id) {
            const idx = this.images.findIndex(item => item.id == id)
            this.images[idx].isFav = !this.images[idx].isFav
        },
        info(id) {
            return this.images.find(item => item.id == id)
        }
    }
})