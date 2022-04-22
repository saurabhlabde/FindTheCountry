import { FC } from "react";

import { ISearchInputProps } from "./searchInput.d";

const SearchInput: FC<ISearchInputProps> = ({
  placeholder = "Enter value",
}) => {
  return (
    <div className="search-input h-50 w-500 p-2 pl-6 bg-bg_secondary rounded-full flex flex-row items-center justify-between">
      <div className="h-full flex flex-1 mr-3">
        <input
          placeholder={placeholder}
          className="h-full w-full text-color_primary text-[15px] font-plus font-medium bg-bg_none outline-none border-none"
        />
      </div>

      <div className="h-9 w-9 rounded-full bg-bg_primary flex items-center justify-center">
        <img src={"assets/search.svg"} />
      </div>
    </div>
  );
};

export default SearchInput;
