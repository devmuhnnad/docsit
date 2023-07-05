<script setup>
const props = defineProps(['path'])
//check if its exist

const { data } = await useAsyncData(props.path, () => queryContent(props.path).findOne())


if (data._value == null) {
    throw createError({
        statusCode: 404,
        message: "Page not found",

    })
}


useHead({
    title: data.value.title,
    meta: [
        {
            name: "description",
            content: data.value.description,
        },
    ],
})

</script>

<template>
    <div class="markdown-body">
        <ContentRenderer :value="data" />
    </div>
</template>

<style>
@import "~/assets/css/markdown.css"
</style>
