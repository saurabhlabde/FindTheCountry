import { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { ICountryCard } from "../../types/card.d";

import { COUNTRIES_GQL } from "./home.gql";

const HomeHook = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countriesData, setCountriesData] = useState<Array<ICountryCard>>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const { loading, error, data } = useQuery(COUNTRIES_GQL);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    if (error) {
      console.log(error, "error");
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setCountriesData(data.countries);
    }
  }, [data]);

  useEffect(() => {
    const a = countriesData.filter((item) => {
      const val = item.name
        .toLocaleLowerCase()
        .search(searchValue.toLocaleLowerCase());

      if (val >= 1) {
        return console.log(val, `${item.name}`);
      }
    });

    console.log(a, "a");
  }, [searchValue]);

  const searchValueChangeHandel = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };

  return { isLoading, countriesData, searchValue, searchValueChangeHandel };
};

export { HomeHook };
