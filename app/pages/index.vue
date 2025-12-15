<script setup lang="ts">
const { data: publications } = await useFetch(
    "/api/documents/latestPublications",
);

const toSlug = (str: string) =>
    str
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

// Helper für saubere Darstellung des Typs (z.B. "Article" statt "content-article")
const formatType = (type: string) => {
    return type.replace("content-", "").toUpperCase();
};
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h1
                    class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
                >
                    Livingdocs Blog
                </h1>
                <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                    Ein POC mit Nuxt 4, TailwindCSS und Livingdocs JSON.
                </p>
            </div>

            <div v-if="!publications" class="text-center text-gray-500">
                Lade Inhalte...
            </div>

            <div
                v-else
                class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
                <div
                    v-for="pub in publications"
                    :key="pub.systemdata.documentId"
                    class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 relative"
                >
                    <div
                        class="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide"
                    >
                        {{ formatType(pub.systemdata.contentType) }}
                    </div>

                    <div class="flex-1 p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <NuxtLink
                                :to="`/article/${toSlug(pub.metadata.title)}`"
                                class="block mt-2"
                            >
                                <p
                                    class="text-xl font-semibold text-gray-900 pr-12"
                                >
                                    {{ pub.metadata.title }}
                                </p>
                                <p
                                    class="mt-3 text-base text-gray-500 line-clamp-3"
                                >
                                    {{
                                        pub.metadata.description ||
                                        "Keine Beschreibung vorhanden."
                                    }}
                                </p>
                            </NuxtLink>
                        </div>

                        <div class="mt-6 flex items-center justify-between">
                            <div class="text-sm text-gray-500">
                                <time
                                    :datetime="
                                        pub.systemdata.visiblePublicationDate
                                    "
                                >
                                    {{
                                        new Date(
                                            pub.systemdata
                                                .visiblePublicationDate,
                                        ).toLocaleDateString("de-CH")
                                    }}
                                </time>
                            </div>
                            <div class="text-xs text-gray-300 font-mono">
                                #{{ pub.systemdata.documentId }}
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 px-6 py-4 border-t border-gray-100">
                        <NuxtLink
                            :to="`/article/${toSlug(pub.metadata.title)}`"
                            class="text-base font-semibold text-blue-600 hover:text-blue-500"
                        >
                            Artikel lesen <span aria-hidden="true">&rarr;</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
