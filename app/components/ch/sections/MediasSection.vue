<template>
  <div class="section section--default">
    <div class="container">
      <h2 class="section__title">Medienmitteilungen</h2>
      <div :class="computedClasses">
        <Swiper
          :speed="500"
          :autoHeight="false"
          :loop="false"
          :slidesPerView="1"
          :spaceBetween="20"
          :breakpoints="{
            480: {
              slidesPerView: 1,
              spaceBetween: 28,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 36,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 36,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 48,
            },
            1800: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 64,
            },
          }"
          :modules="[Navigation, Pagination, A11y]"
          :keyboard="{
            enabled: true,
            onlyInViewport: false,
          }"
          :navigation="{
            nextEl: `#carousel-next-${id}`,
            prevEl: `#carousel-prev-${id}`,
          }"
          :simulateTouch="true"
          :slideToClickedSlide="false"
          :pagination="{
            type: 'bullets',
            el: `#carousel-pagination-${id}`,
            clickable: true,
            bulletClass: 'carousel__bullet',
            bulletActiveClass: 'carousel__bullet--active',
          }"
        >
          <SwiperSlide
            v-for="pub in publications"
            :key="pub.systemdata.documentId"
          >
            <Card type="universal">
              <template #metaInfos>
                <MetaInfo
                  :metainfos="[
                    `Aktualisiert am ${pub.systemdata.visiblePublicationDate}`,
                  ]"
                />
              </template>
              <template #title>
                <h3>
                  {{ pub.metadata.title }}
                </h3>
              </template>
              <template #description>
                <p>
                  {{
                    pub.metadata.description || 'Keine Beschreibung vorhanden.'
                  }}
                </p>
              </template>
              <template #footerAction>
                <Btn
                  to="#"
                  variant="outline"
                  icon-pos="only"
                  icon="ArrowRight"
                  label="Mehr anschauen"
                />
              </template>
            </Card>
          </SwiperSlide>
        </Swiper>
        <div class="carousel__fonctions">
          <div :id="`carousel-pagination-${id}`" class="carousel__pagination" />
          <button :id="`carousel-prev-${id}`" class="carousel__prev">
            <div class="sr-only">Previous image</div>
            <SvgIcon
              icon="ChevronLeft"
              role="presentation"
              aria-hidden="true"
            />
          </button>
          <button :id="`carousel-next-${id}`" class="carousel__next">
            <div class="sr-only">Next image</div>
            <SvgIcon
              icon="ChevronRight"
              role="presentation"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SvgIcon from '../components/SvgIcon.vue'
import Card from '../components/Card.vue'
import Btn from '../components/Btn.vue'
import MetaInfo from '../components/MetaInfo.vue'
import { computed } from 'vue'

defineProps({
  id: {
    type: Number,
    default: () => 8463,
  },
  breakpoints: {
    type: Object,
    default: () => undefined,
  },
})

const computedClasses = computed(() => {
  const base = 'carousel carousel--cards'
  return base
})

const publications = [
  {
    systemdata: {
      documentId: '10000000',
      visiblePublicationDate: '10. Februar 23',
    },
    metadata: {
      title: 'Erster Schweizer auf dem Mars',
      description:
        'Heute ist er gelandet: Der 43-jährige Walliser Auguste Picard betritt als erster Mensch die Oberfläche des roten Planeten.',
    },
  },
  {
    systemdata: {
      documentId: '10000001',
      visiblePublicationDate: '18. März 27',
    },
    metadata: {
      title: 'Schweizer KI gewinnt Literaturnobelpreis',
      description:
        'Ein in Zürich entwickeltes KI-System erhält als erstes nicht-menschliches Werk den Literaturnobelpreis für einen mehrbändigen Romanzyklus.',
    },
  },
  {
    systemdata: {
      documentId: '10000002',
      visiblePublicationDate: '3. November 31',
    },
    metadata: {
      title: 'Gotthard neu gebohrt – diesmal senkrecht',
      description:
        'Ingenieure eröffnen einen vertikalen Gotthard-Schacht, der Personen und Güter in unter drei Minuten vom Tessin in die Zentralschweiz transportiert.',
    },
  },
  {
    systemdata: {
      documentId: '10000003',
      visiblePublicationDate: '27. Juni 29',
    },
    metadata: {
      title: 'Matterhorn offiziell um 12 Meter gewachsen',
      description:
        'Neue geologische Messungen zeigen: Durch tektonische Aktivität ist das Matterhorn seit 1900 kontinuierlich gewachsen – nun erstmals offiziell bestätigt.',
    },
  },
  {
    systemdata: {
      documentId: '10000004',
      visiblePublicationDate: '14. September 34',
    },
    metadata: {
      title: 'Bundesrat tagt erstmals vollständig im Metaverse',
      description:
        'Nach monatelangen Tests findet die Bundesratssitzung erstmals komplett in einer virtuellen Alpenlandschaft statt – inklusive digitalem Glockenschlag.',
    },
  },
]
</script>
