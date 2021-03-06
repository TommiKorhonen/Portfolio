import React from "react";
import { data } from "../../data/InfoData";
import Info from "../Info/Info";

const Informations = () => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-3">
      {data.map((info) => {
        const { id, text, paragraph } = info;
        return (
          <article
            key={id}
            className="border-t-4  p-5 border-gray-700 relative after:opacity-0 opacity-70 hover:opacity-100 hover:after:opacity-80 after:absolute after:bg-yellow-400 after:-top-1 after:left-0 after:h-1 after:w-1/4"
          >
            <Info text={text} paragraph={paragraph} />
          </article>
        );
      })}
    </section>
  );
};

export default Informations;
