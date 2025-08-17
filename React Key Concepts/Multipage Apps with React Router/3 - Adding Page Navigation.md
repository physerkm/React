## Adding Page Navigation

To allow users to switch between different website pages without editing the browser address bar manually, websites normally contain links, typically added via the <a> HTML element (the anchor element), like this

```
<a href="/orders">Past Orders</a>
```

For this example, on-page navigation could therefore be added by modifying the Dashboard component code like this:

```
function Dashboard() {
  return (
    <>
      <h1>The "Dashboard" route component</h1>
      <p>Go to the <a href="/orders">Orders page</a>.</p>
      {/* <p> elements omitted */}
    </>
  );
}
```

In this code snippet, a link to the /orders route has been added. Website visitors therefore see this page now:

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Multipage%20Apps%20with%20React%20Router/img/A%20navigation%20link%20was%20added.png" alt="a-navigation-link-was-added">

When website users click this link, they are therefore taken to the `/orders` route and the content of the Orders component is displayed on the screen.

This approach works but has a major flaw: the website is reloaded every time a user clicks the link. You can tell that it’s reloaded because the browser’s refresh icon changes to a cross (briefly) whenever you click a link.

This happens because the browser sends a new HTTP request to the server whenever a link is clicked. Even though the server always returns the same single HTML page, the page is reloaded during that process (because of the new HTTP request that was sent).

While that’s not a problem on this simple demo page, it would be an issue if you had some shared state (e.g., app-wide state managed via context) that should not be reset during a page change. In addition, every new request takes time and forces the browser to download all website assets (e.g., script files) again. Even though those files might be cached, this is an unnecessary step that may impact website performance.

The following, slightly adjusted, example App component illustrates the state-resetting problem:

```
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './routes/Dashboard.jsx';
import Orders from './routes/Orders.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/orders', element: <Orders /> },
]);

function App() {
  const [counter, setCounter] = useState(0);

  function handleIncCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <>
      <p>
        <button onClick={handleIncCounter}>Increase Counter</button>
      </p>
      <p>Current Counter: <strong>{counter}</strong></p>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
```

In this example, a simple counter was added to the App component. Since `<RouterProvider>` is rendered in that same component, below the counter, the App component should not be replaced when a user visits a different page (instead, it’s `<RouterProvider>` that should be replaced—not the entire App component JSX code).

At least, that’s the theory. But, as you can see in the following screenshot, the counter state is lost whenever any link is clicked:

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Multipage%20Apps%20with%20React%20Router/img/The%20counter%20state%20is%20reset%20when%20switching%20the%20page%201.png" alt="the-counter-state-is-reset-1">

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Multipage%20Apps%20with%20React%20Router/img/The%20counter%20state%20is%20reset%20when%20switching%20the%20page%202.png" alt="the-counter-state-is-reset-2">

In the screenshot, you can see that the counter is initially set to `3` (because the button was clicked thrice). After navigating from `Dashboard` to the `Orders` page (via clicking the `Orders` page link), the counter changes to `0`.

That happens because the page is reloaded due to the HTTP request that’s sent by the browser.

To work around this issue and avoid this unintended page reload, you must prevent the browser’s default behavior. Instead of sending a new HTTP request, the browser URL address should just be updated (from `localhost:5173` to `localhost:5173/orders`) and the target component (`Orders`) should be loaded. Therefore, to the website user, it would seem as if a different page was loaded. But behind the scenes, it’s just the page document (the DOM) that was updated.

Thankfully, you don’t have to implement the logic for this on your own. Instead, the `React Router` library exposes a special Link component that should be used instead of the anchor `<a>` element.

To use this new component, the code in `src/routes/Dashboard.jsx` must be adjusted like this

```
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <h1>The "Dashboard" route component</h1>
      <p>Go to the <Link to="/orders">Orders page</Link>.</p>
      <p>
        This component could display the user dashboard 
        of some web shop.
      </p>
      <p>It's just a dummy example here, but you get the point.</p>
      <p>
        It's worth noting, that it's a regular React component 
        that's activated by React Router because of the 
        active route configuration.
      </p>
    </>
  );
}

export default Dashboard;
```

Inside this updated example, the new Link component is used. That component requires a to prop, which is used to define the URL path that should be loaded.

By using this component in place of the `<a>` anchor element, the counter state is no longer reset. This is because React Router now prevents the browser’s default behavior (i.e., the unintended page reload described above) and displays the correct page content.

Under the hood, the Link component still renders the built-in `<a>` element. But React Router controls it and implements the behavior described above.

The Link component is therefore the default component that should be used for internal links. For external links, the standard `<a>` element should be used instead since the link leads away from the website, hence there is no state to preserve or page reload to prevent.


















