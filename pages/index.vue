<script setup>

const config = useConfig();


useHead({
    title: config.title,
    meta: [
        {
            name: 'description',
            content: config.tagline
        }
    ]
})
</script>

<template>
    <Hero />

    <!-- Features -->

    <div class="max-w-[1500px] gap-10 mx-auto flex justify-between py-20 px-5 flex-col md:flex-row">
        <div class="text-center flex flex-col gap-4 dark:text-white text-gray-900 flex-1">
            <nuxt-img src="/img/easy-to-use.svg" alt="easy to use" class="w-[200px] mx-auto" />

            <h2 class="text-xl font-bold">
                Easy to Use
            </h2>

            <p>DocsIt is designed to be easy to use, with a lot of features to help you build your documentation.</p>

        </div>
        <div class="text-center flex flex-col gap-4 dark:text-white text-gray-900 flex-1">
            <nuxt-img src="/img/clean-arcitecture.svg" alt="clean-arcitecture" class="w-[200px] mx-auto" />

            <h2 class="text-xl font-bold">
                Clean Architecture
            </h2>

            <p>
                DocsIt is built with clean architecture in mind, so you can easily extend it to fit your needs, as it also
                built on top of NuxtJs and TailwindCss.
            </p>
        </div>
        <div class="text-center flex flex-col gap-4 dark:text-white text-gray-900 flex-1">
            <nuxt-img src="/img/familiar.svg" alt="familiar" class="w-[200px] mx-auto" />

            <h2 class="text-xl font-bold">
                Familiar
            </h2>
            DocsIt is planning to improve the documentation experience for developers, by providing a familiar experience
            for them.
            <p>

            </p>
        </div>

    </div>
</template>