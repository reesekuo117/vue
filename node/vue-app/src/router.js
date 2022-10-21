import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Todo from '@/views/Todo.vue'

const routes = [
    {
        // http://localhose:5174/
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:'/About',
        name:'About',
        component:About
    },
    {
        path:'/Todo',
        name:'Todo',
        component:Todo
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes //routes:router
})

export default router