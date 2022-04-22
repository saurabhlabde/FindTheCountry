import { FC } from "react";

import { Navbar, CountryCard, SearchInput } from "@components/index";

const data = {
  code: "IN",
  currency: "INR",
  emoji: "🇮🇳",
  phone: "91",
  continent: {
    code: "AS",
    name: "Asia",
  },
  languages: [
    {
      code: "hi",
      name: "Hindi",
      native: "हिन्दी",
      rtl: false,
    },
    {
      code: "en",
      name: "English",
      native: "English",
      rtl: false,
    },
  ],
  name: "India",
  native: "भारत",
  states: [
    {
      code: "AP",
      name: "Andhra Pradesh",
    },
    {
      code: "AR",
      name: "Arunachal Pradesh",
    },
    {
      code: "AS",
      name: "Assam",
    },
    {
      code: "BR",
      name: "Bihar",
    },
    {
      code: "CT",
      name: "Chhattisgarh",
    },
    {
      code: "GA",
      name: "Goa",
    },
    {
      code: "GJ",
      name: "Gujarat",
    },
    {
      code: "HR",
      name: "Haryana",
    },
    {
      code: "HP",
      name: "Himachal Pradesh",
    },
    {
      code: "JK",
      name: "Jammu and Kashmir",
    },
    {
      code: "JH",
      name: "Jharkhand",
    },
    {
      code: "KA",
      name: "Karnataka",
    },
    {
      code: "KL",
      name: "Kerala",
    },
    {
      code: "MP",
      name: "Madhya Pradesh",
    },
    {
      code: "MH",
      name: "Maharashtra",
    },
    {
      code: "MN",
      name: "Manipur",
    },
    {
      code: "ML",
      name: "Meghalaya",
    },
    {
      code: "MZ",
      name: "Mizoram",
    },
    {
      code: "NL",
      name: "Nagaland",
    },
    {
      code: "OR",
      name: "Odisha",
    },
    {
      code: "PB",
      name: "Punjab",
    },
    {
      code: "RJ",
      name: "Rajasthan",
    },
    {
      code: "SK",
      name: "Sikkim",
    },
    {
      code: "TN",
      name: "Tamil Nadu",
    },
    {
      code: "TG",
      name: "Telangana",
    },
    {
      code: "TR",
      name: "Tripura",
    },
    {
      code: "UP",
      name: "Uttar Pradesh",
    },
    {
      code: "UT",
      name: "Uttarakhand",
    },
    {
      code: "WB",
      name: "West Bengal",
    },
    {
      code: "AN",
      name: "Andaman and Nicobar Islands",
    },
    {
      code: "CH",
      name: "Chandigarh",
    },
    {
      code: "DN",
      name: "Dadra and Nagar Haveli",
    },
    {
      code: "DD",
      name: "Daman and Diu",
    },
    {
      code: "LD",
      name: "Lakshadweep",
    },
    {
      code: "DL",
      name: "National Capital Territory of Delhi",
    },
    {
      code: "PY",
      name: "Puducherry",
    },
  ],
};

const HomeScreen: FC = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <main className="w-screen flex flex-col items-center min-h-screen bg-bg_primary">
      <div className="h-navbar-sec">
        <Navbar titleType="home" />
      </div>

      <div className="h-search-sec w-full flex flex-row items-center justify-center mt-11">
        <SearchInput placeholder="Search country" />
      </div>

      <div className="h-cards-sec flex flex-row flex-wrap mt-24 w-2/3">
        {cards.map((_, i) => {
          return <CountryCard key={i} props={data} />;
        })}
      </div>

      <div className="h-96 w-full"></div>
    </main>
  );
};

export default HomeScreen;
