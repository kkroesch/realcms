import type { Config } from "tailwindcss";

export default <Config>{
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
