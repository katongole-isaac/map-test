/**
 * Search result card
 * This is shown based on the search term
 *
 */

const SearchResultCard = () => {
  return (
    <div className="w-full flex-1 flex gap-1 p-3 bg-zinc-200 dark:bg-neutral-900 rounded-md ">
      <div className="basis-20  flex justify-center items-center ">
        <div className="bg-slate-300 dark:bg-neutral-800 h-20 w-[90%] rounded-lg"></div>
      </div>

      <div className="flex-1 flex flex-col gap-1 px-2  ">
        <p className="text-[18px] dark:text-gray-400 ">
          {" "}
          Title of the search Result Result Result here{" "}
        </p>

        {/* badge */}

        <div className="w-fit px-2 bg-cyan-800 dark:bg-[rgba(138,23,153,0.14)] text-center rounded-md ">
          <p className="text-[12px]  text-cyan-200 dark:text-purple-300  font-bold tracking-widest ">
            Events
          </p>
        </div>

        {/*  description */}
        <div className="w-full text-gray-500">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
