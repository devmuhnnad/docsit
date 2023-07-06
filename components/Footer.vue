<script setup>
const config = useConfig();
</script>
<template>
    <div class="py-6 bg-gray-700">
        <p class="text-center text-white text-base">
            {{ config.theme.footer.copyright }}
        </p>
    </div>
</template>