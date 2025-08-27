## Making Sense of Server-side Rendering (SSR)

When working with React, SSR refers to the process of rendering web pages, and therefore your React components, on the server that handles the incoming HTTP request when a user visits your website.

With SSR enabled, the server will render your React component tree and hence produce the actual HTML code yielded by your components and their JSX instructions. It’s this finished HTML code that’s then sent back to the client. As a result, website visitors will receive an HTML file that’s not empty anymore but that instead contains the actual page content. Search engine crawlers will also see that content and index the page accordingly.

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Server-side%20Rendering/img/React%20SSR%20in%20action.png" alt="react-in-action">

Best of all, you don’t lose the client-side advantages of React because, when enabling SSR, React still works on the client side as it did before! It’ll take over control once that initial HTML document has been received and provide users with the same SPA experience you were able to deliver without SSR. Though, technically, when using SSR, React will be initialized slightly differently on the client. Instead of re-rendering the entire DOM there, it’ll hydrate the page content that was rendered on the server. Hydration means that React will connect your component structure to the rendered HTML code (which was rendered based on that same structure, of course) and make it interactive.

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Server-side%20Rendering/img/After%20receiving%20the%20rendered%20HTML%20code%2C%20React%20hydrates%20the%20code%20on%20the%20client%20side.png" alt="react-in-action">

Consequently, you’ll get the best of both worlds: non-empty, pre-rendered pages for the initial HTTP request sent by the browser, and a highly reactive web application for the user to enjoy.
