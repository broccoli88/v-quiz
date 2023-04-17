<script setup>
	import quizes from "../data/quizes.json";
	import { useRoute } from "vue-router";

	const route = useRoute();
	const quizId = parseInt(route.params.id);
	const quiz = quizes.find((q) => q.id === quizId);
	console.log(quiz);
</script>

<template>
	<div>
		<h1>Question 0/3</h1>
	</div>
</template>
