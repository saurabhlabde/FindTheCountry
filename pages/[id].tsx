import { Header } from "@components/index";
import { DetailsScreen } from "@screens/index";

const Details = () => {
  return (
    <div className="container overflow-hidden overflow-y-scroll relative">
      <Header title="Details" content="find the country details page" />
      <DetailsScreen />
    </div>
  );
};

export default Details;
