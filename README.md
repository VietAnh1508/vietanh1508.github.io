# GitHub Portfolio

A personal GitHub portfolio website built with Svelte/SvelteKit, showcasing bio and repositories, deployed as a static site to GitHub Pages.

## Project Overview

This project is a personal portfolio website that displays your bio, skills, and GitHub repositories. It's built with SvelteKit and deployed to GitHub Pages as a static site.

## Features

- **Bio Section**: Display your name, title, location, and a brief bio
- **Skills Showcase**: List your technical skills
- **Contact Information**: Links to your email, LinkedIn, GitHub, and personal website
- **Repository Grid**: Display your GitHub repositories in a grid layout
- **Repository Filtering**: Filter repositories by language and search term
- **Featured Repositories**: Highlight your best projects
- **Responsive Design**: Works on all devices

## Tech Stack

- **Frontend Framework**: Svelte/SvelteKit
- **Styling**: CSS (component-scoped)
- **Build Tool**: Vite (comes with SvelteKit)
- **Deployment**: GitHub Pages (static build)

## Project Structure

```
github-portfolio/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Header.svelte
│   │   │   ├── Bio.svelte
│   │   │   ├── RepositoryCard.svelte
│   │   │   ├── RepositoryGrid.svelte
│   │   │   └── Footer.svelte
│   │   └── data/
│   │       ├── bio.js
│   │       └── repositories.js
│   ├── routes/
│   │   └── +page.svelte
│   └── app.html
├── static/
│   ├── favicon.ico
│   └── profile-image.jpg
├── package.json
├── svelte.config.js
├── vite.config.ts
└── README.md
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser at `http://localhost:5173`

## Deployment

The site is configured to deploy to GitHub Pages. To deploy:

1. Build the site: `npm run build`
2. The built files will be in the `build` directory
3. Deploy to GitHub Pages using GitHub Actions or manually

## Customization

- Update your bio information in `src/lib/data/bio.js`
- Update your repository information in `src/lib/data/repositories.js`
- Replace `static/profile-image.jpg` with your own profile image
- Customize the components in `src/lib/components/` to match your style
