import "../styles/globals.css";
import { ContainerMain } from "../src/components/ContainerMain/ContainerMain.style";
import Header from "../src/components/Header/header";

function MyApp({ Component, pageProps }) {
  return (
    <ContainerMain>
      <Header></Header>
      <Component {...pageProps} />
    </ContainerMain>
  );
}

export default MyApp;
