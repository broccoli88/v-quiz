<script setup>
import { ref, watch } from "vue";
import q from "../data/quizes.json";
import Card from "../components/Card.vue";

const quizes = ref(q);
const search = ref(``);

watch(search, () => {
	quizes.value = q.filter((quiz) =>
		quiz.name.toLowerCase().includes(search.value.toLowerCase())
	);
});
</script>

<template>
	<div class="container">
		<header>
			<h1>Quiz</h1>
			<input v-model.trim="search" type="text" placeholder="Serch..." />
		</header>
		<div class="options-container">
			<Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
		</div>
	</div>
</template>
<style scoped>
.container {
	max-width: 1000px;
	margin: 0 auto;
}

header {
	margin: 10px 0 30px;
	display: flex;
	align-items: center;
}

header h1 {
	margin-right: 30px;
	font-weight: bold;
}

header input {
	border: none;
	background-color: rgba(128, 128, 128, 0.1);
	padding: 10px;
	border-radius: 5px;
	color: var(--color-text);
}

.options-container {
	display: flex;
	flex-wrap: wrap;
	margin-top: 40px;
}
</style>
