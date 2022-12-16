## Project

The aim of the application is to organise and simplify the mutual exchange of gifts.

### Description
Each user draws a unique person to whom they will give their gift. Each user creates a wish list, shares it with another user whose identity they will discover on the day of the event.

The user logs in with his email address and password, and accesses an interface where he can manage his list and draw another user. The administrator also has access rights to manage the users.

### Purpose
 - Create a secure and personalised interface using a JWT (JSON Web Token)
 - Management of interface state changes
 - Implementation of a client-side router

### Challenge faced 
- CORS: Adjustment of the HTTP headers to secure the exchanges between the api and the client
- Routing: The user should have been correctly redirected, especially when logging in for the first time, where he is asked to reset his password.
- Deploy a vue3 application on heroku servers 

### Next features ... 
- Implement the administrator interface
- Possibility to communicate anonymously with the person drawn
- Develop features for the user profile: upload a photo, modify user data, create your own profile, invite other users...
- Test the application

### Technologies
- [vue3](https://vuejs.org/) (composition API)
- [Pinia](https://pinia.vuejs.org/)
- [Vue-router](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [cypress](https://docs.cypress.io/guides/references/configuration)
- [Bootstrap](https://getbootstrap.com/)
- [Sass](https://sass-lang.com/)

## Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
