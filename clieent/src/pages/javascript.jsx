import MainContent from "../components/main";
import Header from "../components/header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>JAVASCRIPT Page</title>
        <meta
          name="description"
          content="with us you will learn  javascript"
        />
      </Helmet>
      <Header />
      <MainContent pageName="Javascript Page" />
      <Footer />
    </>
  );
};

export default Javascript;
