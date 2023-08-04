/**
 * SearchBox component
 *
 *
 */

import { TbMapSearch } from "react-icons/tb";
import { BiCommand } from "react-icons/bi";

import Input from "../common/input";
import { useRef, useState } from "react";

const SearchBox = ({ onFocus }) => {
  const [inputFocused, setInputFocused] = useState(false);

  const inputRef = useRef();

  const handleOnFocus = () => {
    setInputFocused(true);
    if (onFocus) onFocus(true);
  };

  const handleOnBlur = () => {
    setInputFocused(false);
    if (onFocus) onFocus(false);
  };

  return (
    <div
      className={`w-full flex min-h-[45px] rounded-lg overflow-hidden border  border-gray-300 ${
        inputFocused
          ? "border-gray-600 dark:border-gray-400"
          : "dark:border-gray-800"
      } `}
    >
      {/* search icon */}
      <div className="w-[40px] bg-gray-100  dark:bg-neutral-700 flex items-center justify-center">
        <TbMapSearch size={26} className="text-gray-600 dark:text-gray-300" />
      </div>

      {/* Input search */}

      <div className="flex-1 bg-neutral-100">
        <Input
          ref={inputRef}
          classes="w-full h-full outline-0 px-1 bg-neutral-100 text-gray-800 dark:text-gray-300 dark:bg-neutral-700"
          placeholder={"Search"}
          onFocus={() => handleOnFocus()}
          onBlur={() => handleOnBlur()}
        />
      </div>

      {/* command + K */}
      <div className="w-[60px] bg-neutral-100 dark:text-gray-300 dark:bg-neutral-700 flex justify-center items-center">
        <div className="flex text-[12px] gap-1 items-center justify-center  bg-cyan-800 dark:bg-[#5cc6ce50] text-cyan-200 font-bold px-2 rounded-md ">
          <BiCommand />
          <span> + </span>
          <span> K </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
