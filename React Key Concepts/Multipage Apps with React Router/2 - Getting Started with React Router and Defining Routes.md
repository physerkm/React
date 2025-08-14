## Getting Started with React Router and Defining Routes

React Router is a third-party React library that can be installed in any React project. Once installed, you can use various components in your code to enable the aforementioned features.

Inside your React project, the package is installed via this command:

```
npm install react-router-dom
```

Once installed, you can import and use various components (and Hooks) from that library.

To start supporting multiple pages in your React app, you need to set up **routing** by going through the following steps:

1. Create different components for your different pages (e.g., Dashboard and Orders components).
2. Use the `createBrowserRouter()` function and the `RouterProvider` component from the React Router library to enable routing and define the **routes** that should be supported by the React app.

In this context, the term **routing** refers to the React app being able to load different components for different URL paths (e.g., different components for the `/` and `/orders` paths). A route is a definition that’s added to the React app that defines the URL path for which a predefined JSX snippet should be rendered (e.g., the `Orders` component should be loaded for the /orders path).

In an example React app that contains `Dashboard` and `Orders` components, and wherein the React Router library was installed via `npm install`, you can enable routing and navigation between these two components by editing the root component (in `src/App.jsx`) like this:

```
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

import Dashboard from './routes/Dashboard.jsx';
import Orders from './routes/Orders.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/orders', element: <Orders /> }
]);

function App() {
  return <RouterProvider router={router} />;
}
 
export default App;
```

In the preceding code snippet, React Router’s `createBrowserRouter()` function is called to create a `router` object that contains the application’s route configuration (a list of available routes). The array passed to `createBrowserRouter()` contains route definition objects, where every object defines a path for which the route should be matched and an `element` that should be rendered.

React Router’s `RouterProvider` component is then used to set the `router` configuration and define a place for the active route elements to be rendered.

You can think of the `<RouterProvider />` element being replaced with the content defined via the `element` property once a route becomes active. Therefore, the positioning of the `RouterProvider` component matters. In this case (and probably in most React apps), it’s the root application component—i.e., React Router, that should control the entire application component tree.

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Multipage%20Apps%20with%20React%20Router/img/the-dashboard-component-content-is-loaded.png" alt="the-dashboard-component-content-is-loaded">

The content of the Dashboard component is displayed on the screen if you visit `localhost:5173`. Please note that the visible page content is not defined in the App component. Instead, only two route definitions were added: one for the `/` path (i.e., for `localhost:5173/` or just localhost:5173, without the trailing forward slash—it’s handled in the same way) and one for the `/orders` path (`localhost:5173/orders`).

**Note:** `localhost` is a local address that’s typically used for development. When you deploy your React app (i.e., you upload it to a web server), you will receive a different domain—or assign a custom domain. Either way, it will not be `localhost` after deployment. The part after `localhost (:5173)` defines the network port to which the request will be sent. Without the additional port information, ports `80` or `443` (as the default HTTP(S) ports) are used automatically. During development, however, these are not the ports you want. Instead, you would typically use ports such as `5173`, `8000`, or `8080` as these are normally unoccupied by any other system processes and hence can be used safely. Projects created via Vite typically use port `5173`.

Since `localhost:5173` is loaded by default (when running `npm run dev`), the first route definition `({ path: '/', element: <Dashboard /> })` becomes active. This route is active because its path ('/') matches the path of `localhost:5173` (since this is the same as `localhost:5173/`).

As a result, the JSX code defined via element is rendered in place of the `<RouterProvider>` component by React Router. In this case, this means that the content of the Dashboard component is displayed because the element property value of this route definition is `<Dashboard />`. It is quite common to use single components (such as `<Dashboard />`, in this example), but you could set any JSX content as a value for the element property.

In the preceding example, no complex page is displayed. Instead, only some text shows up on the screen.

But it gets interesting if you manually change the URL from just `localhost:5173` to `localhost:5173/orders` in the browser address bar. With routing enabled and the appropriate routes being defined, the page content does change, as shown:

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Multipage%20Apps%20with%20React%20Router/img/for-orders-the-content-of-the-orders-component-is-displayed.png" alt="for-orders-the-content-of-the-orders-component-is-displayed">

Once the URL changes, the content of the `Orders` component is displayed on the screen. It’s again just some basic text in this first example, but it shows that different code is rendered for different URL paths.

However, this basic example has a major flaw (besides the quite boring page content). Right now, users must enter URLs manually. But, of course, that’s not how you typically use websites.














