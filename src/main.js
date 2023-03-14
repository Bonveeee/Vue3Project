import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import Quasar from 'quasar'


const app = createApp(App)

app.use(store)
app.use( Quasar,{
    //config options
})

app.mount('#app')
