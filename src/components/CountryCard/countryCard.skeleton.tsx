import React from "react";
import ContentLoader from "react-content-loader";

const CountryCardLoader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={375}
    viewBox="0 0 300 375"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="74" y="45" rx="18" ry="18" width="153" height="95" />
    <rect x="94" y="168" rx="10" ry="10" width="113" height="20" />
    <rect x="94" y="207" rx="10" ry="10" width="113" height="20" />
    <rect x="44" y="243" rx="10" ry="10" width="212" height="20" />
    <rect x="87" y="279" rx="10" ry="10" width="127" height="20" />
    <rect x="100" y="314" rx="10" ry="10" width="100" height="20" />
  </ContentLoader>
);

export { CountryCardLoader };
