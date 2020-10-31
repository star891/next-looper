/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';

function NextLooper({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default NextLooper;
