<script setup>
	import { RouterLink } from "vue-router";
	const { quizLength, numberOfCorrectAnswers } = defineProps([
		"quiz-length",
		"number-of-correct-answers",
	]);
</script>

<template>
	<div class="results">
		<p>Your Result...</p>
		<h1>{{ numberOfCorrectAnswers }} / {{ quizLength }}</h1>

		<RouterLink to="/"> Go back</RouterLink>
	</div>
</template>

<style scoped>
	.results {
		text-align: center;
		padding: 100px 0;
	}

	p {
		font-size: 25px;
	}

	h1 {
		font-size: 80px;
	}

	a {
		text-decoration: none;
		font-size: 20px;
		color: crimson;
	}
</style>
