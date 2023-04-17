import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuizView from "../views/QuizView.vue";
import PageNotFound from "../views/PageNotFoundView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", name: "home", component: HomeView },
		{
			path: "/quiz/:id",
			name: "quiz",
			component: QuizView,
		},
		{
			path: "/:catchall(.*)*",
			name: "page not found",
			component: PageNotFound,
		},
	],
});

export default router;
