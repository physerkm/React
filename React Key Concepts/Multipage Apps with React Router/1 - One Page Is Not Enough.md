## One Page is Not Enough

Having just a single page means that complex websites that would typically consist of multiple pages  (e.g., an online shop with pages for products, orders, and more) become quite difficult to build with React. Without multiple pages, you have to fall back to state and conditional values to display different content on the screen.

But without changing URL paths, your website visitors can’t share links to anything but the starting page of your website. Also, any conditionally loaded content will be lost when a new visitor visits that starting page. That will also be the case if users simply reload the page they’re currently on. A reload fetches a new version of the page, and so any state (and therefore user interface) changes are lost.

For these reasons, you absolutely need a way of including multiple pages (with different URL paths) in a single React app for most React websites. Thanks to modern browser features and a highly popular third-party package, that is indeed possible (and the default for most React apps).

Via the **React Router** package, your React app can listen to URL path changes and display different components for different paths. For example, you could define the following path-component mappings:

• `<domain>/ => <Home />` component is loaded.

• `<domain>/products => <ProductList />` component is loaded.

• `<domain>/products/p1 => <ProductDetail />` component is loaded.

• `<domain>/about => <AboutUs />` component is loaded.

Technically, it will still be a SPA because there’s still only one HTML page being sent to website users. But in that single-page React app, different components are rendered conditionally by the React Router package based on the specific URL paths that are being visited. As the developer of the app, you don’t have to manually manage this kind of state or render content conditionally—React Router will do it for you. In addition, your website is able to handle different URL paths, and therefore, individual pages can be shared or reloaded.
