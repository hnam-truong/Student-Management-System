/** This React component provides an AutoComplete search input with integrated suggestions.
 * It utilizes the Ant Design AutoComplete and Input components to allow users to search
 * and receive dynamic suggestions based on the entered query.
 *
 * The search suggestions are generated randomly using the `searchResult` function, and each
 * suggestion includes a link to Taobao for further details.
 *
 * Usage:
 * <SearchInput />
 *
 * Features:
 * - AutoComplete with dynamic search suggestions.
 * - Displays search results with links to Taobao and a random number of results.
 * - Integrated with Ant Design Input for search functionality.
 * - Adjustable width of the popup to match the search input.
 * - Displays the number of random results for each suggestion.
 *
 * Note: This component assumes the availability of Ant Design components.
 */

import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import type { SelectProps } from "antd";
import { IoIosSearch } from "react-icons/io";
import Sizes from "../../../constants/Sizes";
import "../../../styles/main.scss";

const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const SearchInput: React.FC = () => {
  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };

  return (
    <AutoComplete
      popupMatchSelectWidth={Sizes.PopUpSearchLarge}
      style={{ width: Sizes.SearchWidthLarge }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      className="search-input-container"
    >
      <Input.Search
        placeholder="Search"
        enterButton
        prefix={<IoIosSearch size={Sizes.LgMedium} />}
        allowClear
        size="large"
      />
    </AutoComplete>
  );
};

export default SearchInput;
