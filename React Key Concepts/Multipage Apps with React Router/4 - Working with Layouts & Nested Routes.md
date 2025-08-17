## Working with Layouts & Nested Routes

Most websites require some form of page-wide navigation (and hence navigation links) or other page sections that should be shared across some or all routes.

Consider the previous example website with the routes `/` and `/orders`. The example website would also benefit from having a top navigation bar that allows users to switch between the starting page (i.e., the `Dashboard` route) and the `Orders` page.

Therefore, `App.jsx` could be adjusted to have a top navigation bar inside a `<header>` above `<RouterProvider>`:

```
import { 
  createBrowserRouter, 
  RouterProvider, 
  Link 
} from 'react-router-dom';

import Dashboard from './routes/Dashboard.jsx';
import Orders from './routes/Orders.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/orders', element: <Orders /> },
]);

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">My Dashboard</Link>
            </li>
            <li>
              <Link to="/orders">Past Orders</Link>
            </li>
          </ul>
        </nav>
      </header>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
```

But if you try to run this application, you’ll see a blank page and encounter an error message in the JavaScript console in the browser developer tools.

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Multipage%20Apps%20with%20React%20Router/img/React%20Router%20seems%20to%20complain%20about%20something.png" alt="react-router-seems-to-complain-about-something">

The error message is a bit cryptic, but the problem is that the above code tries to use `<Link>` outside of a component controlled by `React Router`.

Only components loaded via `<RouterProvider>` are controlled by React Router, hence React Route` features like its `Link` component can only be used in route components (or their descendent components).

Therefore, setting up the main navigation inside of the App component (which is **not** loaded by React Router) does not work.

To wrap or enhance multiple route components with some shared component and JSX markup, you must define a new route that wraps the existing routes. Such a route is also sometimes called a **layout route** since it can be used to provide some shared layout. The routes wrapped by this route would be called **nested routes**.

A layout route is defined like any other route inside the route definitions array. It then becomes a layout route by wrapping other routes via a special `children` property that’s accepted by React Router. That `children` property receives an array of nested routes—child routes to the wrapping parent route.

Here’s the adjusted route definition code for this example app:

```
import Root from './routes/Root.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Orders from './routes/Orders.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
]);
```

In this updated code snippet, a new root layout route is defined—a route that registers the existing routes (the `Dashboard` and `Orders` components) as child routes. This setup therefore allows the Root component to be active simultaneously to the `Dashboard` or `Orders` route component.

You might also note that the `Dashboard` route no longer has a `path`. Instead, it now has an `index` property, which is set to `true`. That `index` property is a property that can be used when working with nested routes. It tells React Router which nested route to activate (and therefore which component to load) if the parent route path is matched exactly.

In this example, when the / path is active (i.e., if a user visits `<domain>/`), the `Root` and `Dashboard` components will be rendered. For `<domain>/orders`, `Root` and `Orders` would become visible.

The `Root` component is a newly added component in this example. It’s a standard component (like `Dashboard` or `Orders`) with one special feature: it defines the place where the child route components should be inserted via a special `Outlet` component that’s provided by React Router:

```
import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">My Dashboard</Link>
            </li>
            <li>
              <Link to="/orders">Past Orders</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Root;
```

The `<Outlet />` placeholder is needed since React Router must know where to render the route components of the routes passed to the `children` property.

Since the `Root` component itself is also rendered by React Router, it now is a component that has access to the `<Link>` tag. Therefore, this `Root` component can be used to share common markup (like the navigation `<header>`) across all nested routes.

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Multipage%20Apps%20with%20React%20Router/img/A%20shared%20navigation%20bar%20is%20displayed%20at%20the%20top%20(for%20all%20routes).png" alt="a-shared-navigation-bar-is-displayed-at-the-top">

Hence, nested routes and layout routes (or wrapper routes) are crucial features offered by React Router.

It’s also worth noting that you can add as many levels of route nesting as needed by your application— you’re **not** restricted to having just one layout route that wraps child routes.





















