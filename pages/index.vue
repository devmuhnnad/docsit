<script setup>



const config = useConfig();
</script>

<template>
    <div class="flex flex-col gap-5 justify-center items-center bg-light-primary dark:bg-dark-primary py-20">
        <nuxt-img :src="config.themeConfig.navbar.logo.src" :alt="config.themeConfig.navbar.logo.alt"
            class="rounded-full bg-white dark:bg-gray-900 p-5 h-[200px] w-[200px]" />

        <h1 class="text-4xl font-bold text-white dark:text-gray-900">Welcome to {{ config.title }}</h1>
        <p class="text-2xl text-white dark:text-gray-900">
            {{ config.tagline }}
        </p>


        <NuxtLink to="/docs" class="bg-white hover:bg-gray-200 text-gray-900 py-2 px-6 text-lg font-bold rounded-md">
            Get Started
        </NuxtLink>


    </div>
</template>