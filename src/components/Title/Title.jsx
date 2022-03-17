import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";

const Title = ({ title, mb }) => {
  return (
    <h2 className={`flex ${mb}`}>
      <ChevronRightIcon className="h-10 text-yellow-500" />
      {title}
      <ChevronLeftIcon className="h-10 text-yellow-500" />
    </h2>
  );
};

export default Title;
