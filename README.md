# QuickMed - Online Medicine Delivery Platform

A modern, full-featured online medicine delivery and healthcare products platform built with React, Vite, and Tailwind CSS.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Install Dependencies](#install-dependencies)
4. [Project Structure](#project-structure)
5. [Configuration Files](#configuration-files)
6. [Building the Application](#building-the-application)
7. [Running the Project](#running-the-project)

---

## 🔧 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **bun** - [Bun installation](https://bun.sh/)
- **VS Code** - [Download here](https://code.visualstudio.com/)

### Recommended VS Code Extensions

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint

---

## 🚀 Project Setup

### Step 1: Create a new Vite + React + TypeScript project

Open your terminal and run:

```bash
# Create a new Vite project
npm create vite@latest quickmed -- --template react-ts

# Navigate to the project directory
cd quickmed
```

### Step 2: Install base dependencies

```bash
npm install
```

---

## 📦 Install Dependencies

### Step 3: Install Tailwind CSS

```bash
# Install Tailwind CSS and its peer dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### Step 4: Install shadcn/ui

```bash
# Install shadcn/ui CLI
npx shadcn@latest init
```

When prompted, choose the following options:
- Style: **Default**
- Base color: **Neutral**
- CSS variables: **Yes**
- React Server Components: **No**
- Components directory: **src/components**
- Utilities: **src/lib/utils**

### Step 5: Install required shadcn/ui components

```bash
# Install all required UI components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add badge
npx shadcn@latest add tabs
npx shadcn@latest add separator
npx shadcn@latest add toast
npx shadcn@latest add accordion
npx shadcn@latest add alert
npx shadcn@latest add avatar
npx shadcn@latest add checkbox
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form
npx shadcn@latest add navigation-menu
npx shadcn@latest add popover
npx shadcn@latest add progress
npx shadcn@latest add radio-group
npx shadcn@latest add scroll-area
npx shadcn@latest add select
npx shadcn@latest add sheet
npx shadcn@latest add slider
npx shadcn@latest add switch
npx shadcn@latest add textarea
npx shadcn@latest add tooltip
npx shadcn@latest add carousel
npx shadcn@latest add sonner
```

### Step 6: Install additional dependencies

```bash
# Routing
npm install react-router-dom

# Animations
npm install framer-motion

# Icons
npm install lucide-react

# Form handling
npm install react-hook-form @hookform/resolvers zod

# Data fetching
npm install @tanstack/react-query

# Date utilities
npm install date-fns

# Additional utilities
npm install clsx tailwind-merge class-variance-authority
npm install tailwindcss-animate
```

### Complete dependency installation (single command)

If you prefer to install all dependencies at once:

```bash
npm install react-router-dom framer-motion lucide-react react-hook-form @hookform/resolvers zod @tanstack/react-query date-fns clsx tailwind-merge class-variance-authority tailwindcss-animate
```

---

## 📁 Project Structure

Create the following folder structure:

```
quickmed/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── hero-banner.jpg
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── ui/
│   │   │   └── (shadcn components)
│   │   ├── CategoryCard.tsx
│   │   ├── NavLink.tsx
│   │   └── ProductCard.tsx
│   ├── context/
│   │   └── CartContext.tsx
│   ├── data/
│   │   └── products.ts
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Cart.tsx
│   │   ├── Checkout.tsx
│   │   ├── Contact.tsx
│   │   ├── Index.tsx
│   │   ├── Login.tsx
│   │   ├── NotFound.tsx
│   │   ├── OrderSuccess.tsx
│   │   ├── Orders.tsx
│   │   ├── Prescription.tsx
│   │   ├── ProductDetail.tsx
│   │   └── Products.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

To create all folders at once (run in project root):

```bash
# Create folder structure
mkdir -p src/assets src/components/layout src/components/ui src/context src/data src/hooks src/lib src/pages
```

---

## ⚙️ Configuration Files

### Step 7: Configure vite.config.ts

Replace the contents of `vite.config.ts` with:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### Step 8: Configure tailwind.config.ts

Replace the contents of `tailwind.config.ts` with the healthcare theme configuration. This includes:
- Custom color palette (emerald green, teal, orange accents)
- Extended spacing and animations
- Custom component styles

### Step 9: Configure src/index.css

This file contains:
- Tailwind directives
- CSS custom properties for theming
- Component utility classes
- Animation keyframes
- Dark mode support

### Step 10: Configure tsconfig.json

Ensure path aliases are configured:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 🏗️ Building the Application

### Step 11: Create core files in order

1. **src/lib/utils.ts** - Utility functions (cn helper)
2. **src/data/products.ts** - Mock product data
3. **src/context/CartContext.tsx** - Shopping cart state management
4. **src/components/layout/Header.tsx** - Navigation header
5. **src/components/layout/Footer.tsx** - Site footer
6. **src/components/layout/Layout.tsx** - Page layout wrapper
7. **src/components/ProductCard.tsx** - Product display card
8. **src/components/CategoryCard.tsx** - Category display card
9. **src/pages/*.tsx** - All page components
10. **src/App.tsx** - Main app with routing
11. **src/main.tsx** - Entry point

### Step 12: Update index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="QuickMed - Your trusted online pharmacy for medicines and healthcare products" />
    <title>QuickMed - Online Medicine Delivery</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## ▶️ Running the Project

### Development Mode

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

---

## 🎨 Key Features

- ✅ Responsive design (mobile-first)
- ✅ Healthcare-themed UI with emerald green palette
- ✅ Product catalog with categories and filters
- ✅ Shopping cart with quantity management
- ✅ Multi-step checkout flow
- ✅ Prescription upload functionality
- ✅ Smooth Framer Motion animations
- ✅ Dark mode support
- ✅ Accessible components (shadcn/ui)

---

## 📝 Notes

- All product data is mock/dummy data in `src/data/products.ts`
- No real payment gateway is integrated
- The project is designed to easily connect to a real backend API later
- Images use placeholder URLs - replace with actual assets

---

## 🤝 Contributing

Feel free to customize and extend this project as needed!

---

## 📄 License

This project is for educational purposes. Do not use real medical data or branding.
