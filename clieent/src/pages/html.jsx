import MainContent from "../components/main";
import Header from "../components/header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
const Html = () => {
  return (
    <>
      <Helmet>
        <title>HTML Page</title>
        <meta
          name="description"
          content="with us you will learn html "
        />
      </Helmet>
      <Header />
      <MainContent pageName="HTML Page" />
      <Footer />
    </>
  );
};

export default Html;
