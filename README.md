# Monorepo Template

This repository contains:

- `frontend`: React + Vite + TypeScript application
- `backend`: Express + TypeScript API
- root workspace tooling for running both apps together and running tests from one command

## Project structure

```text
Monorepo-Template/
├── backend/
├── frontend/
├── scripts/
│   └── test-runner.cjs
└── package.json
```

## Getting started

1. Install root dependencies:

   ```bash
   npm install
   ```

2. Install dependencies for each app:

   ```bash
   npm install --prefix backend
   npm install --prefix frontend
   ```

## Available scripts

### Root scripts (`/package.json`)

| Script | Description |
| --- | --- |
| `npm run dev` | Runs frontend and backend dev servers at the same time. |
| `npm run test -- frontend` | Runs only frontend tests from root. |
| `npm run test -- backend` | Runs only backend tests from root. |
| `npm run test -- all` | Runs all tests in the repository (default target). |
| `npm run test` | Same as `npm run test -- all`. |

### Backend scripts (`/backend/package.json`)

| Script | Description |
| --- | --- |
| `npm run dev --prefix backend` | Starts backend with nodemon + tsx. |
| `npm run build --prefix backend` | Builds backend TypeScript output using `tsc`. |
| `npm run test --prefix backend` | Runs backend tests with Vitest. |

### Frontend scripts (`/frontend/package.json`)

| Script | Description |
| --- | --- |
| `npm run dev --prefix frontend` | Starts Vite development server. |
| `npm run build --prefix frontend` | Type-checks and creates production build with Vite. |
| `npm run lint --prefix frontend` | Runs ESLint on frontend source files. |
| `npm run preview --prefix frontend` | Serves the frontend production build locally. |
| `npm run test --prefix frontend` | Runs frontend tests with Vitest. |

## Testing from root

Use one script to choose your test target:

```bash
npm run test -- frontend
npm run test -- backend
npm run test -- all
```

If no target is passed, `all` is used automatically.