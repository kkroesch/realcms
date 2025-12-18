const publications = [
  {
    systemdata: {
      documentId: "10000000",
      visiblePublicationDate: "10. Februar 23",
    },
    metadata: {
      title: "Erster Schweizer auf dem Mars",
      description:
        "Heute ist er gelandet: Der 43-jährige Walliser Auguste Picard betritt als erster Mensch die Oberfläche des roten Planeten.",
    },
  },
  {
    systemdata: {
      documentId: "10000001",
      visiblePublicationDate: "18. März 27",
    },
    metadata: {
      title: "Schweizer KI gewinnt Literaturnobelpreis",
      description:
        "Ein in Zürich entwickeltes KI-System erhält als erstes nicht-menschliches Werk den Literaturnobelpreis für einen mehrbändigen Romanzyklus.",
    },
  },
  {
    systemdata: {
      documentId: "10000002",
      visiblePublicationDate: "3. November 31",
    },
    metadata: {
      title: "Gotthard neu gebohrt – diesmal senkrecht",
      description:
        "Ingenieure eröffnen einen vertikalen Gotthard-Schacht, der Personen und Güter in unter drei Minuten vom Tessin in die Zentralschweiz transportiert.",
    },
  },
  {
    systemdata: {
      documentId: "10000003",
      visiblePublicationDate: "27. Juni 29",
    },
    metadata: {
      title: "Matterhorn offiziell um 12 Meter gewachsen",
      description:
        "Neue geologische Messungen zeigen: Durch tektonische Aktivität ist das Matterhorn seit 1900 kontinuierlich gewachsen – nun erstmals offiziell bestätigt.",
    },
  },
  {
    systemdata: {
      documentId: "10000004",
      visiblePublicationDate: "14. September 34",
    },
    metadata: {
      title: "Bundesrat tagt erstmals vollständig im Metaverse",
      description:
        "Nach monatelangen Tests findet die Bundesratssitzung erstmals komplett in einer virtuellen Alpenlandschaft statt – inklusive digitalem Glockenschlag.",
    },
  },
];

export default defineEventHandler((event) => {
  return publications;
});
