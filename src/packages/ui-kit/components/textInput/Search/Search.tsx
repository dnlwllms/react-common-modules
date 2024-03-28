import { FormEvent, forwardRef } from "react";

import { SearchProps } from "./types";

import { SearchSVG } from "../../../icons/outlined/base";

import Input from "../Input";

const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ onSearch, ...props }, ref) => {
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();

      onSearch(props.value?.toString() || "");
    };

    return (
      <form onSubmit={handleSubmit}>
        <Input ref={ref} type="search" icon={<SearchSVG />} {...props} />
      </form>
    );
  }
);

Search.displayName = "Search";

export default Search;
