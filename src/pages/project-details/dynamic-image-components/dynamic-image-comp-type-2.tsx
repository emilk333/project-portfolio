import React from "react";
import ProjectImageMap from '../../project-details/ProjectDetailsImagesMap'

export default (props:any) => (
  <div className="type-1">
    <hr />
    Hi I'm a type-2 component with the image of :
    <h2>{props.block.image}</h2>
    <ProjectImageMap img={props.block.image} />
  </div>
);