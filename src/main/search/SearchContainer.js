import { useState } from "react";
import KeywordCard from "./card/KeywordCard";

export default function SearchContainer() {
  const [keyword, setkeyword] = useState();

  return (
    <div className="w-full sm:w-8/12 px-2">
      <div className="bg-teal-50 rounded-xl sm:rounded-2xl p-6 sm:p-12">
        <form className="sm:py-10 sm:px-10">
          <div className="px-10">
            <input
              onChange={(e) => {
                e.preventDefault();
                setkeyword(e.target.value);
              }}
              className="w-full py-3 px-6 rounded-full appearance-none border-2 border-white leading-tight focus:outline-none  focus:border-teal-400"
              type="search"
              name="search"
              placeholder="Search your keyword"
            />
          </div>
        </form>

        <KeywordCard response={keyword} />
      </div>
    </div>
  );
}
