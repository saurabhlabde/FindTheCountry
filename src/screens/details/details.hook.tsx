import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { IDetailsCountryCard } from "../../types/card.d";

import { COUNTRY_GQL } from "./details.gql";

const DetailsHook = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countryData, setCountyData] = useState<IDetailsCountryCard | null>(
    null
  );

  const { query } = useRouter();

  const { loading, error, data } = useQuery(COUNTRY_GQL, {
    variables: {
      code: query.id,
    },
  });

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
      setCountyData(data.country);
    }
  }, [data]);

  return { isLoading, countryData };
};

export { DetailsHook };
