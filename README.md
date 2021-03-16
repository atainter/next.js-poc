# Next.js/Express POC

The goal of this repository is to demonstrate a simple React server that we could use for standalone web apps.

This repository uses [Next.js](https://nextjs.org/docs/getting-started). Next.js is a convention-over-configuration framework to serve react pages. From the Next.js website...

> Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

Next.js is served by a Node.js Express server so that you can take advantage of global middleware for tracing, csrf, authentication, and access logging. Node.js functions as a lightweight [Backend for Frontend](https://samnewman.io/patterns/architectural/bff/).

This is superior to a Python/Django server because you don't need to maintain a custom webpack dev server that serves FE assets.

## Startup guide

```bash
yarn install

# Dev Mode
yarn dev

# Prod Mode
yarn build
yarn start
```

Visit `http://localhost:3000/example` to test the server

## Overview

### Folder Structure

```
/src
  /pages        # Top-level React pages (file name corresponds to a URL)
    /api        # Contains all API routes (file name corresponds to a URL)
    _app.tsx    # All React pages extend this component
  /server       # Server-side Express code
  /client       # Client-side code
  /lib          # Shared between server and client
```

### Examples

- [Pass data from the server](https://github.com/atainter/next.js-poc/blob/main/src/pages/example/ss-props.tsx)
- [Fetch data from the client](https://github.com/atainter/next.js-poc/blob/main/src/pages/example/client-side-fetch.tsx)
- [Redirect to another page](https://github.com/atainter/next.js-poc/blob/main/src/pages/example/redirect.tsx)

## Development

To add a new page, simply create a file/folder in the pages directory with the same file path as the route that you want to serve the page from. For instance, if I wanted to create a page at `http://localhost:3000/test/page/a`, I would create a file `src/pages/test/page/a.tsx`.

You can fetch data from the server in two ways:

1. From the client side using `useSWR`

2. From the server side using `getServerSideProps`

API routes are served from the `src/pages/api` folder. Create API routes in the same way you would create React page. 

Global middleware and Express packages should be added to the src/server module. See the [access logging middleware](https://github.com/atainter/next.js-poc/blob/18cc32c25a33bc7d424a49d05e93e44b5d51720b/src/server/index.ts#L11)
 
### More notes

- Do not use `getInitialProps`. `getInitialProps` was [deprecated in Next.js 9.x](https://levelup.gitconnected.com/data-fetching-in-react-and-next-js-with-useswr-to-impress-your-friends-at-parties-ec2db732ca6b) and was not predictable. Use `getServerSideProps` instead.

- `getServerSideProps` imports packages directly from the server. Imports won't be included in the client bundle.
Use this [Code Elimination Tool](https://next-code-elimination.vercel.app/) to determine how bundles are included.

- [Next-Connect](https://www.npmjs.com/package/next-connect) Can be used for global middleware (including getServerSideProps) without an Express server 