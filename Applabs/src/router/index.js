import { creatRouter,  createWebHistory} from "vue-router";

import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    }
];

const router = creatRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
