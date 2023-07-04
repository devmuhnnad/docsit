<script setup>
const { params } = useRoute();

// read file from docs folder

const md = ref("");

const getDoc = async () => {
    const doc = await import("../../docs/intro.md");
    console.log(doc);
    md.value = doc.default;
};


getDoc();

</script>

<template>
    {{ md }}
</template>