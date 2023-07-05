<script setup>
const props = defineProps(['path'])
//check if its exist

const { data } = await useAsyncData(props.path, () => queryContent(props.path).findOne())

console.log(data)

if (data._value == null) {
    throw createError({
        statusCode: 404,
        message: "Page not found",

    })
}
</script>

<template>
    <div class="markdown-body">
        <ContentRenderer :value="data" />
    </div>
</template>

<style>
@import "~/assets/css/markdown.css"
</style>
