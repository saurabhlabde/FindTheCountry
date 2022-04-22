import { Header } from "@components/index";
import { DetailsScreen } from "@screens/index";

const Details = () => {
  return (
    <div className="container overflow-x-hidden">
      <Header title="Details" content="find the country details page" />
      <DetailsScreen />
    </div>
  );
};

export default Details;
