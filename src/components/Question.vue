<script setup>
	const { question } = defineProps([`question`]);
	const emit = defineEmits(["selected-option"]);

	const emitSelectedOption = (isCorrect) => {
		emit("selected-option", isCorrect);
	};
</script>

<template>
	<div class="querstion-container">
		<h1 class="question">{{ question.text }}</h1>
	</div>
	<div class="answers-container">
		<div
			v-for="option in question.options"
			:key="option.id"
			@click="emitSelectedOption(option.isCorrect)"
			class="options"
		>
			<p class="option-label">{{ option.label }}</p>
			<div class="option-value">
				<p>{{ option.text }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.question-container {
		margin-top: 20px;
	}

	.question {
		font-size: 40px;
		margin-bottom: 20px;
		margin-top: 40px;
	}

	.options {
		display: flex;
		margin-bottom: 20px;
		cursor: pointer;
	}

	.option-label {
		background-color: bisque;
		width: 50px;
		height: 50px;
		font-size: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: black;
	}

	.option-value {
		background-color: rgb(244, 239, 239);
		width: 100%;
		font-size: 30px;
		padding: 0 20px;
		color: black;
	}
</style>
