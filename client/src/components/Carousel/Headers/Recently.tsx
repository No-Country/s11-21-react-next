import Link from "next/link";
import React from "react";

const Recently = () => {
  return (
    <div className="mx-0 lg:mx-[13vw] xl:mx-[30vw] 2xl:mx-[32vw]">
      <div className="flex flex-row justify-between mt-4">
        <div className="pl-8 lg:pl-0 xl:pl-0 text-start">
          <h3
            className="text-black font-semibold 
        "
          >
            Vistos recientemente
          </h3>
        </div>
        <div className="text-end">
          <Link
            href="/recentViewed"
            className="text-[#FD7B03] text-[12px] flex pr-6"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recently;
