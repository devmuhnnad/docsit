
<script setup>
defineProps(['error'])



</script>

<template>
    <Head>
        <title>{{ error.statusCode }} - {{ error.message }}</title>
    </Head>
    <div class="text-center flex justify-center items-center flex-col h-screen gap-4">

        <h1 class="text-5xl">{{ error.statusCode }}</h1>
        <h2 class="text-4xl">Oops! {{ error.message }}</h2>

    </div>
</template>