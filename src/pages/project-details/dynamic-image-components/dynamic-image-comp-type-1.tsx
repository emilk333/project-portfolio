import React from "react";
import ProjectImageMap from '../../project-details/ProjectDetailsImagesMap'

export default (props:any) => (
  <article className="pf-dynamic-image-component__type-1">
    {props.block.image.map((image: any, index: number) => {
        return  <div key={index} className={"pf-dynamic-image-component__project-image-wrapper pf-dynamic-image-component__project-image-wrapper" + `--${image.composition}`}>
                  <ProjectImageMap img={image.imageId} />
                </div>
    })}
  </article>
);