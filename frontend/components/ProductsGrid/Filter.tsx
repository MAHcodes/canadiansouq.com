import React from "react";

type Props = {};

const Filter = (props: Props) => {
  return (
    <div className="bg-fff rounded-md mb-4 p-2 relative before:absolute before:border-b-fff before:border-solid before:border-transparent before:border-8 before:top-0 before:right-2 before:translate-y-[-100%]">
      <h3 className="text-center font-bold">Filter</h3>
    </div>
  );
};

export default Filter;
