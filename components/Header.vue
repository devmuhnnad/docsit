
<script setup>

const config = useConfig()
const iconName = useState()

const menuOpen = ref(false)

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}

const colorMode = useColorMode()


watchEffect(() => {
    if (colorMode.preference == "dark") {
        iconName.value = "ph:moon-fill"
    } else {
        iconName.value = "mdi:white-balance-sunny"
    }
}, {
    immediate: true,
})

</script>

<template>
    <header class="text-gray-600 body-font">
        <div class="w-full flex flex-wrap p-5 flex-row items-center gap-5">

            <button class="text-gray-900 dark:text-gray-100 text-2xl md:hidden" @click="toggleMenu">
                <Icon name="octicon:three-bars" />
            </button>

            <NuxtLink to="/" class="flex title-font font-medium items-center text-gray-900 ">
                <nuxt-img :src="config.themeConfig.navbar.logo.src" :alt="config.themeConfig.navbar.logo.alt"
                    class="w-10 h-10 rounded-full" />
                <span
                    class="ml-3 text-xl text-gray-900 dark:text-gray-100 hover:text-light-primary dark:hover:text-dark-primary">{{
                        config.title }}</span>
            </NuxtLink>
            <nav class="md:flex hidden flex-wrap items-center text-base justify-center">
                <NuxtLink to="/docs"
                    class="ml-5 text-gray-900 dark:text-gray-100 hover:text-light-primary dark:hover:text-dark-primary font-bold">
                    Tutorial</NuxtLink>

            </nav>
            <div v-if="menuOpen" class="fixed w-screen h-screen bg-black top-0 left-0 opacity-50"></div>

            <nav
                :class="['fixed flex flex-col left-0 top-0 bg-white dark:bg-gray-900 p-5 w-9/12 h-screen ', !menuOpen && '-translate-x-full']">

                <div class="flex justify-start items-center gap-5 border-b pb-2 z-10">
                    <NuxtLink to="/" class="flex title-font font-medium items-center text-gray-900">
                        <nuxt-img :src="config.themeConfig.navbar.logo.src" :alt="config.themeConfig.navbar.logo.alt"
                            class="w-10 h-10 rounded-full" />
                        <span
                            class="ml-3 text-xl text-gray-900 dark:text-gray-100 hover:text-light-primary dark:hover:text-dark-primary">{{
                                config.title }}</span>
                    </NuxtLink>
                    <button @click="toggleTheme()" class="text-xl">
                        <Icon :name="iconName" class="text-gray-900 dark:text-gray-100" size="1em" />
                    </button>

                    <button class="ml-auto " @click="toggleMenu()">
                        <Icon name="ic:outline-close" size="1.5em" />
                    </button>
                </div>

            </nav>

            <button @click="toggleTheme()" class="text-xl ml-auto hidden md:block">
                <Icon :name="iconName" class="text-gray-900 dark:text-gray-100" size="1.5em" />

            </button>
        </div>
    </header>
</template>;
