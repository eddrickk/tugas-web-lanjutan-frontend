import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Auth from './components/Auth.vue'
import Todo from './components/Todo.vue'
import User from './components/User.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/' , component: Auth },
        {path: '/todo' , component: Todo },
        {path: '/user' , component: User }
    ],
})

createApp(App).use(router).mount('#app')
