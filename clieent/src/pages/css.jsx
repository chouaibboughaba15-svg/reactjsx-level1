import Header from '../components/header'
import Footer from "../components/Footer";
import MainContent from "../components/main";
import { Helmet } from "react-helmet-async";

const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta name='description' content="with us you will csssssssssssssss" />
      </Helmet>

      <Header />
      <MainContent pageName="CSS Page" />
      <Footer />
    </>
  );
};

export default Css;
