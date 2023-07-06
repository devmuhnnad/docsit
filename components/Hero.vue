<script setup>

const easeInOutCubic = t => {
    if (t < 0.5) {
        return 4 * t * t * t;
    } else {
        const f = ((2 * t) - 2);
        return 0.5 * f * f * f + 1;
    }
};

const config = useConfig();

const heroComponent = ref(null);

const heroOpacity = useState();

onMounted(() => {
    if (process.client) {
        document.addEventListener("scroll", () => {
            const { scrollY } = window;
            const height = heroComponent.value.clientHeight;
            const progress = 1 - scrollY / height;
            if (scrollY < height) {
                // use ease in out
                heroOpacity.value = easeInOutCubic(progress);
            } else {
                heroOpacity.value = 0;
            }


        })

    }
})
</script>

<template>
    <!-- Hero Section -->
    <div ref="heroComponent" :style="`opacity: ${heroOpacity}`"
        class="flex flex-col gap-5 justify-center items-center bg-light-primary dark:bg-dark-primary py-20 text-center px-5 mt-20">
        <nuxt-img :src="config.theme.navbar.logo.src" :alt="config.theme.navbar.logo.alt"
            class="rounded-full bg-white dark:bg-gray-900 p-5 h-[200px] w-[200px]" />

        <h1 class="text-4xl font-bold text-white dark:text-gray-900">{{ config.title }}</h1>
        <p class="text-2xl text-white dark:text-gray-900">
            {{ config.tagline }}
        </p>


        <NuxtLink to="/docs/intro" class="bg-white hover:bg-gray-200 text-gray-900 py-2 px-6 text-lg font-bold rounded-md">
            Get Started
        </NuxtLink>
    </div>
</template>