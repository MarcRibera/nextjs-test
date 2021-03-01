import Head from 'next/head'

export default function Home({ pageProps }) {
  return (
    <>
      <Head>
        <title> The NEXT project </title>
        <meta name="keywords" content="some, words for the seo" />
      </Head>
      <div className="content-wrap">
        <p>To build a complete web application with React from scratch, there are many
        important details you need to consider:</p>

        <ul>
          <li> <b>Code has to be bundled</b> using a bundler like webpack and transformed using a compiler like Babel.</li>
          <li>You need to do <b>production optimizations</b> such as code splitting.</li>
          <li>You might want to <b>statically pre-render some pages for performance and SEO</b>. You might also want to use server-side rendering or client-side rendering.</li>
          <li>You might have to write some server-side code to <b>connect your React app to your data store.</b> </li>
        </ul>

        <p>A framework can solve these problems. But such a framework must have the right level of abstraction — otherwise it won’t be very useful. It also needs to have great "Developer Experience", ensuring you and your team have an amazing experience while writing code.</p>

        <h3>Next.js The React Framework</h3>
        <p>Enter Next.js, the React Framework. Next.js provides a solution to all of the above problems. But more importantly, it puts you and your team in the pit of success when building React applications.</p>

        <p> Next.js has the best-in-class "Developer Experience" and many built-in features; a sample of them are:</p>
        <ul>
          <li>An <b>intuitive page-based routing </b> system (with support for dynamic routes)</li>
          <li> <b>Pre-rendering</b>, both static generation (SSG) and server-side rendering (SSR) are supported on a per-page basis</li>
          <li> <b>Automatic code splitting</b> for faster page loads</li>
          <li>Client-side routing with optimized prefetching</li>
          <li>Built-in CSS and Sass support, and support for any CSS-in-JS library</li>
          <li>Development environment with Fast Refresh support</li>
          <li>API routes to <b> build API endpoints </b> with Serverless Functions</li>
          <li>Fully extendable</li>
        </ul>
        <p> Next.js is used in tens of thousands of production-facing websites and web applications, including many of the world's largest brands.</p>
      </div>
      <style jsx>
        {`
          .content-wrap {
            width: 700px;
          }
        `}
      </style>
  </>
  )
}
