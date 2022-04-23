import { FC } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Loading: FC = () => {
  return (
    <div className="fixed z-10 h-screen w-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <MoonLoader color="blue" />
      </div>
    </div>
  );
};

export default Loading;
