import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FavView from '@/views/FavView.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/favourites',
        name: 'favourites',
        component: FavView
    }
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router