## How Does Styling Work in React Apps?

How is that styling added? How can styles be added to user interface elements (such as DOM elements) when using React?

The short answer is, “Just as you would to non-React apps.” You can add CSS styles and classes to JSX elements just as you would to regular HTML elements. And in your CSS code, you can use all the features and selectors you know from CSS. There are no React-specific changes you have to make when writing CSS code.

For example,

```
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

body {
  margin: 0;
  padding: 3rem;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #dff8fb;
  color: #212324;
}

button {
  padding: 0.5rem 1rem;
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #212324;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #3f3e40;
}

ul {
  max-width: 35rem;
  list-style-type: none;
  padding: 0;
  margin: 2rem auto;
}

li {
  margin: 1rem 0;
  padding: 1rem;
  background-color: #5ef0fd;
  border: 2px solid #212324;
  border-radius: 4px;
}
```

The actual CSS code and its meaning are not important. However, what is important is the fact that this code contains no JavaScript or React code at all. As mentioned, the CSS code you write is totally independent of the fact that you’re using React in your app.

The more interesting question is, how is that code actually applied to the rendered web page? How is it imported into that page?

Normally, you would expect style file imports (via `<link href="…">`) inside of the HTML files that are served. Since React apps are typically about building **single-page applications**, you only have one HTML file—the `index.html` file. But if you inspect that file, you won’t find any `<link href="…">` import that would point to the `index.css` file (only some other `<link>` element that imports a favicon):

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

How are the styles defined in `index.css` imported and applied then?

You find an `import` statement in the root entry file (this is the `main.jsx` file in projects generated via Vite):

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

The import `'./index.css';` statement leads to the CSS file being imported and the defined CSS code being applied to the rendered web page.

It is worth noting that this is not standard JavaScript behavior. You can’t import CSS files into JavaScript—at least, not if you’re just using vanilla JavaScript.

CSS works this way in React apps because the code is transpiled before it’s loaded into the browser. Therefore, you won’t find that `import` statement in the final JavaScript code that’s executed in the browser. Instead, during the **transpilation process**, the transpiler identifies the CSS import, removes it from the JavaScript file, and injects the CSS code (or an appropriate link to the potentially bundled and optimized CSS file) into the `index.html` file. 

You can confirm this by inspecting the rendered **Document Object Model (DOM)** content of the loaded web page in the browser.

You can define any styles you want to apply to your HTML elements (that is, to your JSX elements in your components) directly inside of the `index.css` file, or in any other CSS files that are imported by the `index.css` file.

You could also add additional CSS import statements, pointing at other CSS files, to the `main.jsx` file or any other JavaScript files (including files that store components). However, it is important to keep in mind that CSS styles are always global. No matter whether you import a CSS file into `main.jsx` or a component-specific JavaScript file, the styles defined in that CSS file will be applied globally.

That means that styles defined in a `goal-list.css` file, which may be imported in a `GoalList.jsx` file, could still affect JSX elements defined in a totally different component. 
