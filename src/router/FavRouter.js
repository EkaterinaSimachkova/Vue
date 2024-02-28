import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FavView from '@/views/FavView.vue'
import CardView from '@/views/CardView.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/favourites',
        name: 'fav',
        component: FavView
    },
    {
        path: '/:id',
        name: 'card',
        component: CardView,
        props: true
    }
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router