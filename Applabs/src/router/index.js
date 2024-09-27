import { createRouter,  createWebHistory} from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Work from "../components/Works.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/works",
        name: "Work",
        component: Work
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
