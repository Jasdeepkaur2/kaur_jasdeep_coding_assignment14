# Jasdeep Kaur - Portfolio Site (Assignment 14)

## Overview
A multi-page React portfolio website built with Create React App, containerized with Docker, and served via Nginx at localhost:5575. The project includes ESLint, Prettier, Husky pre-commit hooks, Storybook, and a GitHub Actions CI/CD pipeline.

## Prerequisites
- Docker must be installed and running
- Node.js v18+ (for local development)
- Git

## How to Run at localhost:5575

Step 1 - Clone the repository
git clone git@github.com:jasdeepkaur2/kaur_jasdeep_coding_assignment14.git
cd kaur_jasdeep_coding_assignment14

Step 2 - Build the Docker image
docker build -t kaur_jasdeep_coding_assignment14 .

Step 3 - Run the container
docker run -d -p 5575:5575 --name kaur_jasdeep_coding_assignment14 kaur_jasdeep_coding_assignment14

Step 4 - Open in browser
Visit: http://localhost:5575

Stop the container
docker stop kaur_jasdeep_coding_assignment14

Remove the container
docker rm kaur_jasdeep_coding_assignment14

## Why Docker?
Docker containerizes the app so it runs the same way on any machine regardless of the operating system or environment. No need to install Node.js or any dependencies on the host machine - everything is inside the container.

## How the Dockerfile Works
- Stage 1 (Build): Uses node:18-alpine to install dependencies and run npm run build to create an optimized production build of the React app
- Stage 2 (Serve): Uses nginx:alpine to serve the static build files. Alpine images are used because they are lightweight and secure
- The working directory inside the container is /kaur_jasdeep_final_site
- Nginx listens on port 5575 and serves the React build folder
- This is called a multi-stage build - it keeps the final image small by not including Node.js in the production image

## Why Nginx?
Nginx is a fast, lightweight web server used to serve the static React production build files. It handles the try_files directive so React Router navigation works correctly inside the container.

## What is a Production Build?
npm run build creates an optimized version of the React app - it minifies JavaScript, removes development warnings, and bundles all files for best performance. This is what gets copied into the Docker image.

## CI/CD Pipeline (GitHub Actions)
The .github/workflows/ci.yml file runs automatically on every push to GitHub:
- Runs ESLint to check for code errors
- Runs Prettier to check code formatting
- Runs unit tests with Jest
This ensures code quality is maintained on every commit.

## What is ESLint?
ESLint is a static code analysis tool that finds and fixes problems in JavaScript code. It is configured in package.json and runs automatically before every commit via Husky.

## What is Prettier?
Prettier is a code formatter that enforces consistent style (semicolons, single quotes, indentation). Configured in .prettierrc file.

## What is Husky?
Husky runs scripts before git commits using pre-commit hooks. In this project it runs lint-staged which runs Prettier on staged files before every commit, ensuring no badly formatted code gets committed.

## What is Storybook?
Storybook is a tool for developing and documenting UI components in isolation. Run it with: npm run storybook

## Portfolio Sections
- About: Personal info, professional summary, work experience, education
- Work: Academic and course projects with images, descriptions, tech stack, and GitHub links
- Skills: Languages, frameworks, tools, Microsoft ecosystem, professional skills
- Resources: Favourite learning resources with icons, descriptions, and links
- Dev Setup: VS Code config, terminal setup, preferred font, development stack

## Local Development (without Docker)
npm install --legacy-peer-deps
npm start
Visit: http://localhost:3000

## Tech Stack
- React 18 (Create React App)
- React Router DOM (multi-page navigation)
- Docker + Nginx (containerization and serving)
- ESLint (code linting)
- Prettier (code formatting)
- Husky + lint-staged (pre-commit hooks)
- Storybook (component documentation)
- GitHub Actions (CI/CD pipeline)
