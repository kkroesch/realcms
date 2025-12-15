<script setup lang="ts">
defineProps<{ block: any }>();
</script>

<template>
    <div class="ld-block mb-6">
        <h1
            v-if="block.component === 'title' && block.content?.title"
            class="text-4xl font-extrabold mb-6 mt-8 text-gray-900 leading-tight"
        >
            {{ block.content.title }}
        </h1>

        <h2
            v-else-if="block.component === 'heading-h2' && block.content?.title"
            class="text-2xl font-bold mt-10 mb-4 text-gray-800"
        >
            {{ block.content.title }}
        </h2>

        <h3
            v-else-if="block.component === 'heading-h3' && block.content?.title"
            class="text-xl font-bold mt-8 mb-3 text-gray-800"
        >
            {{ block.content.title }}
        </h3>

        <h4
            v-else-if="block.component === 'heading-h4' && block.content?.title"
            class="text-lg font-bold mt-6 mb-2 text-gray-800"
        >
            {{ block.content.title }}
        </h4>

        <div
            v-else-if="block.content?.text"
            v-html="block.content.text"
            class="text-gray-700 leading-relaxed space-y-4"
        ></div>

        <div
            v-else-if="block.component === 'video-embed'"
            class="bg-gray-100 p-4 rounded text-center text-gray-500 my-8"
        >
            [Video Embed Platzhalter:
            {{ block.content?.videoEmbedInclude?.service || "Video" }}]
        </div>

        <div v-else-if="block.component === 'link'" class="inline-block mt-4">
            <button
                class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
                Mehr erfahren
            </button>
        </div>

        <template v-else-if="block.containers">
            <div
                v-for="(containerName, idx) in Object.keys(block.containers)"
                :key="idx"
                :class="`ld-container-${containerName} my-4`"
            >
                <LdBlock
                    v-for="child in block.containers[containerName]"
                    :key="child.id"
                    :block="child"
                />
            </div>
        </template>
    </div>
</template>
