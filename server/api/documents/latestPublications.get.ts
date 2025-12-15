import publications from "~/assets/example_pubs.json";

export default defineEventHandler((event) => {
  // Simuliert den Livingdocs Server Response
  return publications;
});
