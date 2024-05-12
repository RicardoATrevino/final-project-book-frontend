# Book App Front-end

<img width="494" alt="Screenshot 2024-05-12 at 2 12 12 PM" src="https://github.com/RicardoATrevino/final-project-book-frontend/assets/109166877/f47e789e-ce49-4e0d-86d5-ca987eac4b3e">

these are all buttons. Favorites section will not load unless signed in.

<img width="309" alt="Screenshot 2024-05-12 at 2 16 24 PM" src="https://github.com/RicardoATrevino/final-project-book-frontend/assets/109166877/cfbe7461-70f0-48ed-8151-17742032be89">

these are also buttons, the 'more info' will appear on every book, however no book will actually contain any information in there until a future update. 

Inspiration behind this is that i love to read books but I never read them so I created this app to keep track of what I both have read and then need to read, as well as favorites. 

-- features --
Users can sign up, login, log out, access the home page to view a few hardcoded book files. 2 different search bars, one for the database and the other uses an api search, as more and more books are favorited the db will get bigger. The 3 original hardcoded books have a description to go along with them, opened up by pressing the description button, every book added thereafter will not get one until a future update. 
-- --
Technologies include Ruby on Rails backend, PostgreSQL database, React.js frontend (also list any libraries, APIs, etc.)

Optional: Add screenshots or gifs of your application

## Installation

```bash
npm install
npm install axios --save
Install tailwind (start at Step 2 Install Tailwind CSS): https://tailwindcss.com/docs/guides/vite
npm run dev
```

Technologies Used

    React.js
    Axios
    React Router
    Tailwind CSS


## Roadmap
- make it look better
- Make it so I can create a list of books separate from the favorited
- Modal thing so that when I click on a description a pop up of the book description will appear for every book, evern from the api. 
- Custom links for lists?
- reccomendations and refined searches on  what to read next
- maybe can scan part of the internet to tell you a rough price for the book online.
- refine the search
- add an average stars of reviews.
- maybe make a temp favorites where a user can make a favorites list, then it would prompt a user to create an account
- or even not show the favorites list unless a user is signed in.
