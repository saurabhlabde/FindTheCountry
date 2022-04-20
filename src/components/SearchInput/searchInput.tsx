import { FC } from "react";

import { ISearchInputProps } from "./searchInput.d";

const SearchInput: FC<ISearchInputProps> = ({
  placeholder = "Enter value",
}) => {
  return (
    <div className="search-input">
      <div>
        <div>
          <input type={placeholder} />
        </div>
      </div>

      <div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchInput;
