# Uproar

## Description

Welcome to Uproar backend repository.

Uproar is a personal To-Do application for managing tasks, track progress and improve productivity.

> **Uproar**: a loud and impassioned noise or disturbance.
>
> _Similar: disorder, distrubance_

"To-Do apps don't work". Why? Because people don't use them. Why? What's the point of using a To-Do app when you already know what to do in yourself? right? WRONG:
To-Do list are one of the simplest way to improve work productivity, **When you do use them effectively**, you'll be much better organized, more reliable, experience less stress, safe in the knowledge that you haven't forgotten anything important.

Introducing Uproar...

Uproar is a personal To-Do application for managing tasks, track progress and improve productivity. It provide you with everything you need to create and manage tasks and ensure that you actually get to do them easily and organised.

- **Private**: Uproar is built just for you and you can customise everything to fit your likings and workflow.
- **Powerfull**: Uproar provides you a simple yet powerfull interface with everthing you need to be more productive and get things done faster.
- **Free**: open and free for everyone forever.

## Technologies

Uproar is mainly built using

- **TypeScript**: used as the programming language
- **Node Js**: used as the backend environment
- **Express Js**: web framework for Node.js
- **PostgreSQL**: used as the database to share data across the app
- **Sequelize**: ORM for interacting with the database
- **Jest and Supertest**: Testing Framework
- **Jira**: Project management system
- **Jenkins**: The CI/ CD system

## Installation

To get started with this project in a developement environment follow the followinng steps

Clone the project repo

```
git clone https://github.com/Yvad60/uproar-be.git
```

This project uses [pnpm](https://pnpm.io/) so you may need to get it first

```
npm i -g pnpm
```

Install project dependencies

```
pnpm install
```

Start the application

```
pnpm dev
```

the project will be started and accessible from `http://localhost:5000/`

## Available commands

- **start**: starting application in development environment
- **build**: building TypeSript files into JavaScript
- **lint**: running ESLint to detect error in the codebase
- **lint:fix**: find end auto-fix ESLint errors
- **test**: running test with Jest (coverage included)
- **format:check**: check for code format mistakes with Prettier
- **format:write**: find and fix Prettier format errors
- **prepare**: installing husky which will control git precommit hooks
