# MoviesAnco

MoviesAnco is a React-based web application that allows users to search for movies and view detailed information about them. It uses the [OMDb API](https://www.omdbapi.com/) to fetch movie data.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/moviesanco.git
   cd moviesanco

2. Install dependencies
    npm install

3. Create a new .env file in the root directory and add your OMDb API key:
    REACT_APP_API_KEY=your_api_key_here

4. Start the development server :
    npm start

The app will be available at http://localhost:3000.

Project Structure
    moviesanco/
    ├── public/
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── src/
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── context.js
    │   ├── Error.js
    │   ├── Home.js
    │   ├── index.css
    │   ├── index.js
    │   ├── Movie.js
    │   ├── reportWebVitals.js
    │   ├── Search.js
    │   ├── setupTests.js
    │   ├── SingleMovie.js
    │   ├── Test.js
    │   └── useFetch.js
    ├── .env
    ├── .gitignore
    ├── package.json
    └── [README.md](http://_vscodecontentref_/1)

Technologies Used
   1. React: Frontend library for building user interfaces.
   2. React Router: For routing between pages.
   3. OMDb API: For fetching movie data.
   4.  CSS: For styling the application.

Components
   1. App: Main component that defines routes.
   2. Home: Displays the search bar and movie grid.
   3. Search: Allows users to search for movies.
   4. Movie: Displays a grid of movies based on the search query.
   5. SingleMovie: Displays detailed information about a selected movie.
   6. useFetch: Custom hook for fetching data from the OMDb API.

Environment Variables
    The project uses the following environment variable:

   REACT_APP_API_KEY:<vscode_annotation details='%5B%7B%22title%22%3A%22hardcoded-credentials%22%2C%22description%22%3A%22Embedding%20credentials%20in%20source%20code%20risks%20unauthorized%20access%22%7D%5D'> Your</vscode_annotation> OMDb API key.

License
    This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
    OMDb API for providing movie data.
    Create React App for bootstrapping the project.


This version includes all the necessary details while retaining the original content.