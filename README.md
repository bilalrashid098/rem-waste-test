
# REM Waste – Product Listing Page Redesign

This project is a front-end redesign task for REM Waste, built using **React**, **Vite**, and **TypeScript**. The goal is to implement a clean, modular product listing page using reusable components and API integration with robust architecture and styling.

---

## 🚀 Tech Stack

- **React 19** (with TypeScript)
- **Vite** – Lightning-fast dev environment
- **Tailwind CSS** – Utility-first styling
- **React Router DOM v7** – Routing
- **Axios** – API communication with interceptors
- **ESLint** – Linting and code consistency

---

## 📁 Project Structure

```
remwaste-test/
│
├── public/                     # Static assets
├── src/
│   ├── assets/
│   │   ├── images/             # Images used in UI
│   │   └── style/
│   │       └── global.css      # Global styles
│   │
│   ├── components/
│   │   ├── products/           # Product card components
│   │   │   ├── FooterSelector.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── index.ts
│   │   │   └── type.ts
│   │   ├── buttons/            # Reusable Button component
│   │   │   ├── Button.tsx
│   │   │   ├── index.ts
│   │   │   └── type.ts
│   │   ├── spinner/            # Reusable Spinner component
│   │   │   ├── Spinner.tsx
│   │   │   ├── index.ts
│   │   │   └── type.ts
│   │   ├── shimmer/            # Reusable Shimmer component
│   │   │   ├── Card.tsx
│   │   │   └── index.ts
│   │   └── buttons/            # Stepper component
│   │       ├── stepper.tsx
│   │       ├── index.ts
│   │       └── type.ts
│   │   
│   ├── lib/
│   │   └── axios.ts            # Axios instance with interceptors
│   │
│   ├── pages/
│   │   └── home/
│   │       ├── index.ts
│   │       └── Home.tsx
│   │
│   ├── services/
│   │   └── product.service.ts  # API calls related to products
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── vite.config.ts
├── tsconfig.json
├── package.json
└── eslint.config.js
```

---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/bilalrashid098/rem-waste-test.git
cd rem-waste-test
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add:

```env
VITE_API_BASE_URL=https://app.wewantwaste.co.uk/api
```

### 4. Start the development server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Scripts

| Script            | Description                    |
|-------------------|--------------------------------|
| `npm run dev`     | Start the Vite dev server      |
| `npm run build`   | Build for production           |
| `npm run preview` | Preview production build       |
| `npm run lint`    | Run ESLint for code linting    |

---

## 🔗 Live Previews

- **Vercel Deployment**: [https://rem-waste-test.vercel.app/](https://rem-waste-test.vercel.app/)
- **CodeSandbox Preview**: [https://732ly5-5173.csb.app/](https://732ly5-5173.csb.app/)

---

## 📄 License

This project was developed as part of a technical evaluation for REM Waste and is not intended for public distribution.
