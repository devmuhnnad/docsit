<script setup >



const pages = await queryContent("/").find()

const { doc } = useRoute().params;

const currentPath = `/${doc}`;

const activeClass = "text-light-primary-light dark:text-dark-primary-light bg-gray-200 dark:bg-gray-800"


</script>

<template>
    <div class="flex min-h-[90vh] pb-10 px-5">

        <div
            class=" flex-col gap-1 border-r dark:border-gray-600 border-gray-200 p-2  mr-4 w-1/6 min-w-[200px] hidden md:flex">

            <NuxtLink v-for="page in pages" :key="page._id" :to="`/docs${page._path}`"
                :class="['block text-base text-gray-800 rounded-md dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 font-bold', currentPath == page._path && activeClass]">
                {{
                    page.title
                }}</NuxtLink>

        </div>

        <div class="md:w-4/6 w-full">
            <ContentDocWrapped :path="currentPath" />
        </div>
    </div>
</template>

