// rtl-cache.ts
import rtlPlugin from "stylis-plugin-rtl";
import { createEmotionCache } from "@mantine/core";

const rtlCache = createEmotionCache({
  key: "nmpt-rtl",
  stylisPlugins: [rtlPlugin],
});

export default rtlCache;
