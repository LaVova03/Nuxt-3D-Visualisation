# Vue3 + Nuxt + TypeScript + Speckle/Viewer

## How to Use:

1. **Switching tabs**: Click on the header buttons to switch between pages.
2. **Switch language**: Click on the button in the upper right corner.

## 📚 Project Description

This project is built with **Vue**, **TypeScript**, **Nuxt** and **Speckle/Viewer** focusing on reusability, scalability, and maintainability.

## 📂 Project Structure

```
/assets                                // All assets
├── /styles                            // Styles folder
|   └── main.css                       // Styles main file
/components                            // Reusable components
├── tabs.vue                           // Component for displaying tabs and switching between them
/i18n                                  // Internationalization folder
├── /locales                           // Folder for translations into different languages
|   └── en.json                        // File with translations
├── i18n.config.ts                     // Config file for translations
/node_modules                          // Installed dependencies
/pages                                 // All pages of the app
├── index.vue                          // Main homepage
/public                                // Public assets
├── vue.webp                           // Image
/server                                // Backend config and settings folder
├── /api                               // Api folder
|   └── data.ts                        // Api file with data
└── tsconfig.json                      // Server config file
```

## 🔍 **Structure Details**

### **Folder Breakdown**

1. **/assets**: Contains static assets and styles for the application.

   - `/styles`: Folder for styles.
     - `main.css`: Main stylesheet for the application.

2. **/components**: Reusable UI components.

   - `tabs.vue`: Component for displaying tabs and switching between them.

3. **/i18n**: Internationalization configuration and translations.

   - `/locales`: Folder containing translations for different languages.
     - `en.json`: Translation file for the English language.
   - `i18n.config.ts`: Configuration file for internationalization.

4. **/node_modules**: Contains installed dependencies and modules.

5. **/pages**: Application pages.

   - `index.vue`: Main homepage and entry point of the application.

6. **/public**: Public files and assets.

   - `vue.webp`: Image available in the public directory.

7. **/server**: Backend configuration and settings.

   - `/api`: Folder for API and data handling.
     - `data.ts`: API data file.

8. **Root Project Files**:
   - `tsconfig.json`: TypeScript configuration file.

### Project Overview

This structure ensures scalability and maintainability by organizing assets, components, translations, API logic, and backend configurations into dedicated folders. Each folder serves a clear purpose, making the codebase easy to navigate and extend.

## 🚀 Getting Started

### Installation:

1. Clone the repository: `git clone <URL>`
2. Navigate to the project directory: `cd <project-name>`
3. Install dependencies: `npm install`

### Scripts:

- Run the development server: `npm run dev`

## 🛠️ Technologies Used

- **Vue3**: A progressive JavaScript framework for building user interfaces and single-page applications.
- **TypeScript**: A superset of JavaScript that adds static typing, improving code reliability and maintainability.
- **Nuxt**: A framework based on Vue.js, designed for building server-side rendered (SSR) applications and static websites with ease.
- **Speckle/Viewer**: A powerful 3D visualization tool for viewing and interacting with complex geometry and data streams. It enables real-time rendering and manipulation of 3D models, making it ideal for design, architecture, and engineering applications.

## 📦 Example Component

### Component file: `buttonLang.vue`

```ts
<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useSwitchLocalePath } from "#imports";
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
const currentLocale = computed(() => locale.value);
</script>

<template>
  <UButton class="absolute right-0 :md:right-8 z-10">
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      @click="setLanguagePreference(locale.code)"
      :class="{ active: currentLocale === locale.code }"
    >
      {{ currentLocale }}
    </NuxtLink>
  </UButton>
</template>
```
