<template>
    <div>
        <button v-if="$colorMode.value == 'dark'" @click="toggleTheme()">
            <Icon name="ph:moon-fill" class="text-gray-900 dark:text-gray-100" size="1.5em" />
        </button>

        <button v-if="$colorMode.value == 'light'" @click="toggleTheme()">
            <Icon name="mdi:white-balance-sunny" class="text-gray-900 dark:text-gray-100" size="1.5em" />
        </button>
    </div>
</template>