<script setup>
const { quiz } = defineProps([`quiz`]);
</script>

<template>
    <div class="card">
        <img :src="quiz.img" alt="" />
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} questions</p>
        </div>
    </div>
</template>
<style scoped>
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px hsla(0, 0%, 100%, 0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
}

.card img {
    width: 100%;
    object-fit: cover;
    margin: 0;
}

.card .card-text {
    padding: 0 5px;
}

.card-text h2 {
    font-weight: bold;
}
</style>
