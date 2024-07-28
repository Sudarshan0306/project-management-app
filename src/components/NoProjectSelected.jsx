import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectSelected = ({onStartAdd}) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="mx-auto w-16 h-16 object-contain"
        src={noProjectImage}
        alt="An empty tasks list"
      />
      <h2 className="text-xl font-bold text-stone-500  my-4">
        No projects selected
      </h2>
      <p className="text-stone-400 mb-4">select a project or get started with a new one </p>
      <p className="mt-8">
        <Button onClick = {onStartAdd}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
