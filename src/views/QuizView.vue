<script setup>
	import quizes from "../data/quizes.json";
	import { ref, watch, computed } from "vue";
	import { useRoute } from "vue-router";
	import Question from "../components/Question.vue";
	import QuizHeader from "../components/QuizHeader.vue";
	import Results from "../components/Results.vue";

	const route = useRoute();
	const quizId = parseInt(route.params.id);
	const quiz = quizes.find((q) => q.id === quizId);

	const currentQuestionIndex = ref(0);
	const numberOfCorrectAnswers = ref(0);
	const showResults = ref(false);

	const questionStatus = computed(
		() => `${currentQuestionIndex.value}/${quiz.questions.length}`
	);

	const barPercentage = computed(
		() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
	);

	const onSelectedOption = (isCorrect) => {
		if (isCorrect) numberOfCorrectAnswers.value++;
		if (quiz.questions.length === currentQuestionIndex.value + 1)
			showResults.value = true;
		currentQuestionIndex.value++;
		2;
	};
</script>
<template>
	<div>
		<QuizHeader
			:question-status="questionStatus"
			:bar-percentage="barPercentage"
		/>
		<div>
			<Question
				v-if="!showResults"
				:question="quiz.questions[currentQuestionIndex]"
				@selected-option="onSelectedOption"
			/>
			<Results
				v-else
				:quiz-length="quiz.questions.length"
				:number-of-correct-answers="numberOfCorrectAnswers"
			/>
		</div>
	</div>
</template>
