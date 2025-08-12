//Icons
import "@mdi/font/css/materialdesignicons.css";

//Custom Colors
import { myTheme } from "./theme";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    defaultTheme: "myTheme",
    themes: { myTheme },
    variations: {
      colors: Object.keys(myTheme.colors || {}),
      lighten: 3,
      darken: 3,
    },
  },
});
