<script setup lang="ts">
const route = useRoute();
const slugOrId = route.params.slug as string;
const { data: publications } = await useFetch(
    "/api/documents/latestPublications",
);

const toSlug = (str: string) =>
    str
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

const article = computed(() => {
    if (!publications.value) return null;
    return publications.value.find((doc) => {
        if (String(doc.documentId) === slugOrId) return true;
        const docSlug = toSlug(doc.metadata.title);
        return docSlug === slugOrId || docSlug.startsWith(slugOrId);
    });
});
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-10 px-4">
        <div
            v-if="article"
            class="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 sm:p-12"
        >
            <NuxtLink
                to="/"
                class="inline-flex items-center text-blue-600 hover:underline mb-8 font-medium"
            >
                &larr; Zurück zur Übersicht
            </NuxtLink>

            <header class="mb-8 border-b pb-6">
                <h1
                    class="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
                >
                    {{ article.metadata.title }}
                </h1>
                <div class="text-gray-500 text-sm flex gap-4">
                    <span>{{
                        new Date(
                            article.metadata.visiblePublicationDate,
                        ).toLocaleDateString("de-CH")
                    }}</span>
                    <span>ID: {{ article.documentId }}</span>
                </div>
            </header>

            <article class="prose prose-slate lg:prose-lg max-w-none">
                <LdBlock
                    v-for="block in article.content"
                    :key="block.id"
                    :block="block"
                />
            </article>
        </div>

        <div v-else class="text-center mt-20">
            <h2 class="text-2xl font-bold text-gray-700">
                Artikel nicht gefunden
            </h2>
            <NuxtLink to="/" class="text-blue-600 mt-4 block"
                >Zurück Home</NuxtLink
            >
        </div>
    </div>
</template>
