import { createApp } from "vue";

import "./index.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
