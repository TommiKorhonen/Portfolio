import React from "react";

const Skill = ({ text, src }) => {
  return (
    <>
      <img src={src} alt={text} className="h-16 mb-2" />
      <p className="font-medium uppercase">{text}</p>
    </>
  );
};

export default Skill;
