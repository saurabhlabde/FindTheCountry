import { FC, memo } from "react";

import { ICountryCardProps, IItemProps } from "./countryCard.d";

const Item: FC<IItemProps> = ({ props }) => {
  const { content = "", title = "" } = props;

  return (
    <div>
      <div>
        <h1>
          <span>{content}: </span>
        </h1>
      </div>

      <div>
        <h1>
          <span>{title}</span>
        </h1>
      </div>
    </div>
  );
};

const CountryCard: FC<ICountryCardProps> = memo(({ props }) => {
  const {
    code = "",
    emoji = "",
    name = "",
    currency = "",
    continent = {
      name: "",
    },
    states = [],
    languages = [],
  } = props;

  const getLanguages = () => {
    return languages.map((language, index) => {
      const isLanguage = index < languages.length;
      return isLanguage ? `${language}, ` : `${language}`;
    });
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
    <div id={`${code}`} className="country-card">
      <div>
        <div>
          <h1>
            <span>{emoji}</span>
          </h1>
        </div>
      </div>

      <div>
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
