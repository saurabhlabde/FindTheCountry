import { FC } from "react";

import { Navbar, DetailsCountryCard, Loading } from "@components/index";

import { DetailsHook } from "./details.hook";

const DetailsScreen: FC = () => {
  const { isLoading, countryData } = DetailsHook();

  if (isLoading) return <Loading />;

  return (
    <main className="w-screen flex flex-col items-center min-h-screen bg-bg_primary">
      <div>
        <Navbar titleType="back" />
      </div>
      <div>
        <DetailsCountryCard props={countryData} />
      </div>
    </main>
  );
};

export default DetailsScreen;
