import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        integrity="sha512-yH57xOoKzqgVCEGzNlzZ/8VhBv9Al+/S+/OGj1s7+9TzefZPh4cfFcT1vR5SHUMYTuQ9DHcYSm7tKzHqs5dK2Q=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
