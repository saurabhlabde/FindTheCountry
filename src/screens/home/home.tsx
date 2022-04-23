import { FC } from "react";

import { Navbar, CountryCard, SearchInput, Loading } from "@components/index";

import { HomeHook } from "./home.hook";

const HomeScreen: FC = () => {
  const { isLoading, countriesData, searchValue, searchValueChangeHandel } =
    HomeHook();

  if (isLoading) return <Loading />;


  return (
    <main className="w-screen flex flex-col items-center min-h-screen bg-bg_primary">
      <div className="h-navbar-sec">
        <Navbar titleType="home" />
      </div>

      <div className="h-search-sec w-full flex flex-row items-center justify-center mt-11 px-10">
        <SearchInput
          placeholder="Search country"
          value={searchValue}
          onChange={searchValueChangeHandel}
        />
      </div>

      <div className="h-cards-sec flex flex-row flex-wrap mt-24 w-2/3">
        {countriesData.map((item, i) => {
          return <CountryCard key={i} props={item} />;
        })}
      </div>

      <div className="h-96 w-full"></div>
    </main>
  );
};

export default HomeScreen;
