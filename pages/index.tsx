import { Header } from "@components/index";
import { HomeScreen } from "@screens/index";

const Home = () => {
  return (
    <div className="container overflow-hidden overflow-y-scroll relative">
      <Header title="Home" content="find the country home page" />
      <HomeScreen />
    </div>
  );
};

export default Home;
