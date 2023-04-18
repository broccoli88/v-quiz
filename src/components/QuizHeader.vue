<script setup>
	const { questionStatus, barPercentage } = defineProps([
		"question-status",
		"bar-percentage",
	]);
</script>

<template>
	<header>
		<h1>Question {{ questionStatus }}</h1>
		<div class="bar">
			<div class="completion" :style="{ width: barPercentage }"></div>
		</div>
	</header>
</template>

<style scoped>
	header {
		margin-top: 20px;
	}

	header > h1 {
		font-size: 30px;
	}

	.bar {
		width: 300px;
		height: 50px;
		border: 3px solid bisque;
		margin-top: 20px;
	}

	.completion {
		height: 100%;
		width: 0%;
		background-color: bisque;
	}
</style>
