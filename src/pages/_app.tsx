// import '@component/styles/globals.css'
import "../styles/globals.scss";
import type { AppProps } from "next/app";
//redux
import { Provider } from "react-redux";
import store from "../components/store/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
