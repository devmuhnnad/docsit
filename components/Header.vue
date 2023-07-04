
<script setup>

const config = useConfig()
const iconName = useState("mdi:white-balance-sunny")
const iconClass = useState("text-gray-900")

watch(() => useColorMode().preference, (newVal) => {
    if (newVal == "dark") {
        iconName.value = "ph:moon-fill"
        iconClass.value = "text-gray-100"
    } else {
        iconName.value = "mdi:white-balance-sunny"
        iconClass.value = "text-gray-900"
    }
})

</script>

<template>
    <header class="text-gray-600 body-font">
        <div class="w-full flex flex-wrap p-5 flex-col md:flex-row items-center">
            <NuxtLink to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                <nuxt-img :src="config.themeConfig.navbar.logo.src" :alt="config.themeConfig.navbar.logo.alt"
                    class="w-10 h-10 rounded-full" />
                <span
                    class="ml-3 text-xl text-gray-900 dark:text-gray-100 hover:text-light-primary dark:hover:text-dark-primary">{{
                        config.title }}</span>
            </NuxtLink>
            <nav class="md:mr-auto flex flex-wrap items-center text-base justify-center">
                <NuxtLink to="/docs"
                    class="ml-5 text-gray-900 dark:text-gray-100 hover:text-light-primary dark:hover:text-dark-primary font-bold">
                    Tutorial</NuxtLink>

            </nav>
            <button @click="toggleTheme()" class="text-xl">
                <Icon :name="iconName" :class="iconClass" size="1.5em" />

            </button>
        </div>
    </header>
</template>;
