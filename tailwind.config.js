import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

export const plugins = [
  iconsPlugin({
    // Select the icon collections you want to use
    collections: getIconCollections([
      "lucide",
      "mdi",
      "fa6-solid",
      "fa6-regular",
      "fa6-brands",
    ]),
  }),
];
