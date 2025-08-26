## What’s the Problem with Client-Side React Apps?

The big advantage of **single-page applications (SPAs)** and client-side React is that you can build highly reactive and interactive web UIs. The UI can be updated almost instantly, visible page reloads and switches can be avoided, and hence your users benefit from a mobile-app-like user experience.

But this reliance on client-side code (and, therefore, JavaScript) also has potential disadvantages:

- If users disable JavaScript, the website will be pretty much unusable.
- The initially fetched HTML document is almost empty—data fetching and content rendering only take place after that initial HTTP request and response.

The first point might not matter too much, since only a small subset of all users will disable JavaScript and you can show an appropriate warning message via the `<noscript>` tag.

But the second point can have significant consequences. Since the initial HTML document is almost empty, users won’t see any content until all the JavaScript code has been fetched and executed. While most users might not see a notable delay, depending on the device and internet connection of a user, this may take up to a few seconds for some users.

In addition, search engine crawlers (e.g., Google’s crawler) will not necessarily wait for all your client-side JavaScript code to be fetched and executed when indexing your page. Therefore, those crawlers may see a mostly empty page and hence rank your website badly (or not index it at all).

<img src="https://github.com/physerkm/React/blob/main/React%20Key%20Concepts/Server-side%20Rendering/img/The%20page%20content%20is%20nowhere%20to%20be%20found%20in%20the%20page%20source%20code.png" alt="the-page-content-is-nowhere">

Figure shows the page source code (which can be inspected by right-clicking on the website) of a typical React app. There’s almost no content between the `<body>` tags. The title ("`Hello World!`") and the text below it are missing in that source code. The content is missing there because it’s not part of the initial HTTP response. Instead, it’s rendered by the transpiled React code after the page loaded (and after that code was downloaded from the server).

Of course, these disadvantages won’t matter in all cases. If you’re building some company-internal application, or a UI that’s hidden behind some login (and hence won’t be indexed anyway), or if you’re only targeting users with fast devices and internet connections, you might not need to worry about these potential problems.

But if you’re building a public-facing website where search engine indexing matters or that may be visited by users with slow devices or internet connections, you might want to consider getting rid of these disadvantages. And that’s precisely where **SSR** can help out.
