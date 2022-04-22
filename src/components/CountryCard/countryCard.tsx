import { FC, memo } from "react";
import { useRouter } from "next/router";

import { ICountryCardProps, IItemProps } from "./countryCard.d";

const Item: FC<IItemProps> = ({ props }) => {
  const { title = "", content = "" } = props;

  return (
    <div className="flex flex-row items-start justify-center my-3">
      <div>
        <h1 className="font-plus text-color_primary font-semibold capitalize whitespace-nowrap">
          <span>{title}: </span>
        </h1>
      </div>

      <div className="ml-1">
        <h1 className="font-plus text-color_secondary font-semibold">
          <span>{content}</span>
        </h1>
      </div>
    </div>
  );
};

const CountryCard: FC<ICountryCardProps> = memo(({ props }) => {
  const {
    code = "-",
    emoji = "-",
    name = "-",
    currency = "-",
    continent = {
      name: "-",
    },
    states = [],
    languages = [],
  } = props;

  const router = useRouter();

  const getLanguages = () => {
    return languages.map((language, index) => {
      const isLanguage = index < languages.length;
      return isLanguage ? `${language.name}` : `, ${language.name}`;
    });
  };

  const cardClickHandel = () => {
    return router.push(`/${code}`);
  };

  const items = [
    {
      title: "name",
      content: name,
    },
    {
      title: "state",
      content: `${states.length}`,
    },
    {
      title: "languages",
      content: `${getLanguages()}`,
    },
    {
      title: "continent",
      content: continent?.name !== "" ? `${continent?.name}` : "",
    },
    {
      title: "currency",
      content: `${currency}`,
    },
  ];

  return (
    <div
      id={`${code}`}
      className="country-card flex flex-col items-center bg-bg_secondary rounded-[20px] w-max min-w-[300px] py-10 m-2 cursor-pointer hover:drop-shadow-blue"
      onClick={cardClickHandel}
    >
      <div className="cc-top-sec">
        <div className="flag-sec overflow-hidden h-[90px] w-[90px] rounded-full flex items-center justify-center">
          <h1 className="text-9xl mt-[-13px]">
            <span>{emoji}</span>
          </h1>
        </div>
      </div>

      <div className="cc-bottom-sec mt-8">
        {items?.map((item, index) => {
          return (
            <Item
              key={index}
              props={{
                title: item.title,
                content: item.content,
              }}
            />
          );
        })}
      </div>
    </div>
  );
});

export default CountryCard;
