
import Header from '../components/header';
import Footer from "../components/Footer";
import MainContent from "../components/main"
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>HOME Page</title>
        <meta
          name="description"
          content="with us you will learn hhhhhhhhhhhhhhhhhhhh"
        />
      </Helmet>

      <Header />

      <MainContent pageName="HOME Page" />

      <Footer />
    </>
  );
};

export default Home;
