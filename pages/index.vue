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

            <p>Flutter Bond is designed from the ground up to be easily installed and used to get your Flutter app up and
                running quickly.
            </p>
        </div>
        <div class="text-center flex flex-col gap-4 dark:text-white text-gray-900 flex-1">
            <nuxt-img src="/img/clean-arcitecture.svg" alt="clean-arcitecture" class="w-[200px] mx-auto" />

            <h2 class="text-xl font-bold">
                Clean Architecture
            </h2>

            <p>
                Build your app with clean architecture in mind. Flutter bond will help you build scalable and maintainable
                apps, with a lot of time saved.
            </p>
        </div>
        <div class="text-center flex flex-col gap-4 dark:text-white text-gray-900 flex-1">
            <nuxt-img src="/img/familiar.svg" alt="familiar" class="w-[200px] mx-auto" />

            <h2 class="text-xl font-bold">
                Familiar
            </h2>

            <p>
                The developer experience does matter, Flutter Bond is designed to be as familiar as possible to developers
                coming from other frameworks especially Laravel.
            </p>
        </div>

    </div>
</template>