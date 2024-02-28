import { defineStore } from 'pinia'
import getRickAndMortyCharacters from '@/functions/getRickAndMortyCharacters.js'
import getPokemonCharacters from '@/functions/getPokemonCharacters.js'
import getDogs from '@/functions/getDogs.js'


export const useFavStore = defineStore('favStore', {
    state: () => ({
          images: [],
          imagesRickAndMorty: [],
          imagesPokemon: [],
          imagesDog: [],        
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
                        if (count == this.imagesRickAndMorty.length) {
                            this.images = this.imagesRickAndMorty
                        } else {
                            this.images = this.imagesRickAndMorty = await getRickAndMortyCharacters(count)
                            console.log(this.images)
                            console.log(this.imagesRickAndMorty)
                        }            
                        break

                    case 'Pokemon':
                        if (count == this.imagesPokemon.length) {
                            this.images = this.imagesPokemon
                        } else {
                            this.images = this.imagesPokemon = await getPokemonCharacters(count)
                            console.log(this.images)
                            console.log(this.imagesPokemon)
                        } 
                        break

                    case 'Dog':
                        if (count == this.imagesDog.length) {
                            this.images = this.imagesDog
                        } else {
                            this.images = this.imagesDog = await getDogs(count)
                            console.log(this.images)
                            console.log(this.imagesDog)
                        } 
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