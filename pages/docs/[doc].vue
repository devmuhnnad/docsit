<script setup >


const { doc } = useRoute().params;

const json = await useFetch("test.json");



</script>

<template>
    {{ json }}
</template>