import { FC } from "react";
import Head from "next/head";

import { IHead } from "./head.d";

const Header: FC<IHead> = ({ title, content, links }) => {
  const isTitle = title ? `${title} | Find The Country` : "Find The Country";
  const isContent = content ?? "find the country";
  const isLinks = links ?? null;

  return (
    <Head>
      <title>{isTitle}</title>
      <meta name="description" content={isContent} />
      <link rel="icon" href="/favicon.ico" />
      {isLinks}
    </Head>
  );
};

export default Header;
