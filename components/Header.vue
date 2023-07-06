
<script setup>

const config = useConfig()

const menuOpen = ref(false)

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}

const pages = await queryContent("/").find()

const currentPath = useState();
const isOnDocsPage = useState();

const activeClass = "text-light-primary-light dark:text-dark-primary-light bg-gray-200 dark:bg-gray-800"


watchEffect(() => {
    isOnDocsPage.value = useRoute().path.startsWith("/docs")
    const { doc } = useRoute().params;
    currentPath.value = `/${doc}`;
}, {
    immediate: true
})






</script>

<template>
    <header class="text-gray-600 body-font fixed dark:bg-gray-900 bg-white w-full top-0 z-10">
        <div class="w-full flex flex-wrap p-5 flex-row items-center gap-5">

            <div class="md:hidden">
                <Icon name="octicon:three-bars" class="text-gray-800 dark:text-gray-100 text-2xl cursor-pointer"
                    @click="toggleMenu" />
            </div>

            <NuxtLink to="/" class="flex title-font font-medium items-center text-gray-900 ">
                <nuxt-img :src="config.theme.navbar.logo.src" :alt="config.theme.navbar.logo.alt"
                    class="w-10 h-10 rounded-full" />
                <span
                    class="ml-3 text-xl text-gray-900 dark:text-gray-100 hover:text-light-primary dark:hover:text-dark-primary">{{
                        config.theme.navbar.title }}</span>
            </NuxtLink>
            <nav class="md:flex hidden flex-wrap items-center text-base justify-center" aria-label="Desktop navigation">
                <NuxtLink v-for="item in config.theme.navbar.items" :to="item.to" :target="item.newTab ? '_blank' : '_self'"
                    class="ml-5 text-gray-900 dark:text-gray-100 hover:text-light-primary dark:hover:text-dark-primary font-bold cursor-pointer">
                    {{ item.label }}</NuxtLink>

            </nav>
            <div v-if="menuOpen" class="fixed w-screen h-screen bg-black top-0 left-0 opacity-50"></div>

            <nav :class="['fixed flex flex-col left-0 top-0 bg-white dark:bg-gray-900 p-5 w-9/12 h-screen ', !menuOpen && '-translate-x-full']"
                aria-label="Desktop navigation">

                <div class="flex justify-start items-center gap-5 border-b pb-2 z-10">
                    <NuxtLink to="/" class="flex title-font font-medium items-center text-gray-900">
                        <nuxt-img :src="config.theme.navbar.logo.src" :alt="config.theme.navbar.logo.alt"
                            class="w-10 h-10 rounded-full" />
                        <span
                            class="ml-3 text-xl text-gray-900 dark:text-gray-100 hover:text-light-primary dark:hover:text-dark-primary">{{
                                config.title }}</span>
                    </NuxtLink>

                    <ThemePicker />

                    <button class="ml-auto " @click="toggleMenu()">
                        <Icon name="ic:outline-close" size="1.5em" />
                    </button>
                </div>

                <div v-if="isOnDocsPage">

                    <NuxtLink v-for="page in pages" :key="page._id" :to="`/docs${page._path}`"
                        :class="['block text-base text-gray-800 rounded-md dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 font-bold', currentPath == page._path && activeClass]">
                        {{
                            page.title
                        }}</NuxtLink>

                </div>

                <div v-else class="py-3 flex flex-col gap-3">
                    <NuxtLink v-for="item in config.theme.navbar.items" :to="item.to"
                        :target="item.newTab ? '_blank' : '_self'"
                        class="ml-5 text-gray-900 dark:text-gray-100 hover:text-light-primary dark:hover:text-dark-primary font-bold">
                        {{ item.label }}</NuxtLink>

                </div>



            </nav>

            <ThemePicker class="text-xl ml-auto hidden md:block" />
        </div>
    </header>
</template>;
