/**
 * Right panel consisting of a search box
 *
 */

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import SearchBox from "./common/searchBox";
import SearchResultCard from "./common/searchResultCard";

const variants = {
  hide: {
    opacity: 0,
    y: 20,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.01,
    },
  },
  exit: {
    y: 20,
    opacity: 0,
  },
};

const searchTableVariants = {
  hide: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.01,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const SearchArea = () => {
  const [onSearchBoxFocus, setOnSearchBoxFocus] = useState(false);

  return (
    <div className="py-1 px-4  h-full space-y-4  relative ">
      <div className="py-2 space-y-3 mt-3">
        <AnimatePresence>
          {onSearchBoxFocus && (
            <motion.p
              variants={variants}
              initial="hide"
              animate="visible"
              exit="exit"
              className="text-[15px] text-gray-800  dark:text-gray-400 "
            >
              Go ahead. You know you want to.
            </motion.p>
          )}
        </AnimatePresence>

        <SearchBox onFocus={setOnSearchBoxFocus} />
      </div>
      <AnimatePresence>{onSearchBoxFocus && <SearchTable />}</AnimatePresence>

      <div className="flex flex-col gap-3  max-h-[900px] overflow-auto pb-8 pt-1  scroller px-1 ">
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
      </div>
    </div>
  );
};

export default SearchArea;

const SearchTable = () => {
  return (
    <motion.div
      variants={searchTableVariants}
      exit="exit"
      className="absolute top-24 w-[93%] h-full  py-2  max-h-max backdrop-blur-sm rounded-md overflow-hidden "
    >
      <div className="bg-neutral-100 dark:bg-neutral-700  h-1/2 w-full p-2 ">
        <SearchResultCard />
      </div>
    </motion.div>
  );
};
