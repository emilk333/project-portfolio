import React from "react";
import ProjectImageMap from '../../project-details/ProjectDetailsImagesMap'

export default (props:any) => (
  <article className="type-1">
    <div className="pf-project-details__project-image-wrapper pf-project-details__project-image-wrapper--size-1">
        <ProjectImageMap img={props.block.image} />
    </div>
  </article>
);