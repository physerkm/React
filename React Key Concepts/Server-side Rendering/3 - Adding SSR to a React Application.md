## Adding SSR to a React Application

It is extremely important to understand that SSR-enabled React applications need to execute code in two environments (server and browser), whereas client-side React applications only rely on the browser. Therefore, to use SSR, a server-side environment must be added to the React project—it’s not enough to just adjust the React code in a few places.

For example, standard Vite-based projects don’t support SSR out of the box. Consequently, if you want to support SSR, you must edit your Vite project setup (and some of your project code files) to enable executing React code on both the client and server side. For example, you must add some code that handles incoming HTTP requests and triggers React code execution on the server side.

The fact that manually enabling SSR is a non-trivial process that requires advanced Node.js and backend development knowledge is one of the reasons why the official React documentation recommends creating new React projects with the help of frameworks like Next.js. ([See](https://react.dev/learn/creating-a-react-app))

But it’s not the only reason.

**Note:** Manually enabling SSR requires backend development and build process configuration knowledge—in addition to the React knowledge you need. You can go through that setup process or you can rely on frameworks like Next.js to do the heavy lifting for you. If you’re interested in manually configuring SSR in Vite-based projects, the official Vite SSR documentation is a great place to [learn more](https://vite.dev/guide/ssr). In addition, you can [explore](https://github.com/mschwarzmueller/book-react-key-concepts-e2/tree/15-ssr-next-intro/examples/02-ssr-enabled) the following demo project that was set up according to the official Vite SSR instructions.
