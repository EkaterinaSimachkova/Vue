import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/FavRouter'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import AppFav from './AppFav.vue'


createApp(AppFav)
                .use(bootstrap)
                .use(createPinia())
                .use(router)
                .mount('#app')
