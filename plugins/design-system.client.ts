import { defineCustomElements } from "@swiss/design-system/loader";

export default defineNuxtPlugin((nuxtApp) => {
  // Initialisiert die Web Components im Browser
  defineCustomElements();
});
