import React from "react";
import Button from "../Button";

import yourData from "../../yourData";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          <img
            className="mob:w-7 mob:h-7 laptop:w-10 laptop:h-10"
            src={social.icon}
            alt=""
          />
        </Button>
      ))}
    </div>
  );
};

export default Socials;
