import { FC } from "react";
import { useRouter } from "next/router";

import { ILogoProps, INavbarProps } from "./navbar.d";

const Logo: FC<ILogoProps> = ({ titleType }) => {
  const title = titleType === "back" ? "back" : "findTheCountry";

  const router = useRouter();

  const titleClickHandel = () => {
    return titleType === "back" ? router.back() : router.push("/");
  };

  return (
    <div className="flex flex-row items-center">
      <div className="logo-img-sec cursor-default">
        <img className="logo-img" src="assets/flag.svg" />
      </div>

      <div className="ml-3 cursor-pointer" onClick={titleClickHandel}>
        <h1 className="logo-text font-plus font-bold text-2xl capitalize">
          <span>{title}</span>
        </h1>
      </div>
    </div>
  );
};

const Navbar: FC<INavbarProps> = ({ titleType }) => {
  return (
    <div className="navbar flex items-center justify-center w-full py-10">
      <Logo titleType={titleType} />
    </div>
  );
};

export default Navbar;
