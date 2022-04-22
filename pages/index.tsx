import { Header } from "@components/index";
import { HomeScreen } from "@screens/index";

const Home = () => {
  return (
    <div className="container overflow-x-hidden">
      <Header title="Home" content="find the country home page" />
      <HomeScreen />
    </div>
  );
};

export default Home;
