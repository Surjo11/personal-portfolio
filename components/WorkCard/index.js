import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div>
      <div
        className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0"
        onClick={onClick}
      >
        <div
          className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-48"
          style={{ height: "600px" }}
        >
          <img
            alt={name}
            className="h-full w-full object-cover"
            src={img}
          ></img>
        </div>
      </div>
      <h1 className=" p-4 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <button className="pl-4 text-xl opacity-50">
        {description ? description : "Details"}
      </button>
    </div>
  );
};

export default WorkCard;
