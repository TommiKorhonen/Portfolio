import React from "react";
const Info = ({ text, paragraph }) => {
  return (
    <>
      <h2 className="text-xl font-semibold">{text}</h2>
      <p>{paragraph}</p>
    </>
  );
};

export default Info;
