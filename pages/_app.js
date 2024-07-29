import '../globals.css'; // Note the '..' if _app.js is not in the root directory

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}