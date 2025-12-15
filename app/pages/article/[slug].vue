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
        // FIX: Check ID im systemdata Objekt
        if (String(doc.systemdata.documentId) === slugOrId) return true;

        // Check Slug
        const docSlug = toSlug(doc.metadata.title);
        return docSlug === slugOrId || docSlug.startsWith(slugOrId);
    });
});

const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";
    try {
        return new Date(dateString).toLocaleDateString("de-CH", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    } catch (e) {
        return "";
    }
};
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
                <span
                    class="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded mb-3 uppercase tracking-wider"
                >
                    {{ article.systemdata.contentType }}
                </span>

                <h1
                    class="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
                >
                    {{ article.metadata.title }}
                </h1>

                <div class="text-gray-500 text-sm flex gap-4 items-center">
                    <span>{{
                        formatDate(article.systemdata.visiblePublicationDate)
                    }}</span>
                    <span class="text-gray-300">|</span>
                    <span class="font-mono text-xs text-gray-400"
                        >ID: {{ article.systemdata.documentId }}</span
                    >
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
            <p class="text-gray-500 mt-2">
                Gesuchter Slug/ID: "{{ slugOrId }}"
            </p>
            <NuxtLink to="/" class="text-blue-600 mt-4 block hover:underline"
                >Zurück zur Startseite</NuxtLink
            >
        </div>
    </div>
</template>
