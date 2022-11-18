# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run server`
Runs demo server with data for the app.

# Homework

Here is sample code that is not by far ideal.

1. Refactor code to production-grade quality.
2. Find and describe bugs and issues.
3. Add styling by your choice. (You can add styling library)
4. Demonstrate connection to backend API.
5. Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)
6. Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
7. Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

# Result 

1. I refactored code to functional components because class components are no longer used, 
I used react-router-dom library for routing, useContext hook for state management, axios for fetching 
data.
2. - useEffect without dependency array
   - adding todos to state individualy in for cycle instead of set it up at once
   - imprecise naming of state
   - missing key prop in maping todos
   - obsolete use of var
3. For styling I used MaterialUI and styled components libraries. 
4. I used axios in separate file and simulation of server. 
5-7 Done

