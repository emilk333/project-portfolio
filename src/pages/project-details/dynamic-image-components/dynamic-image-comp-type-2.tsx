import React from "react";
import ProjectImageMap from '../../project-details/ProjectDetailsImagesMap'

export default (props: any) => (
  <article className="type-2">
    {props.block.image.map((image: string, index: number) => {
        return <div key={index} className="pf-project-details__project-image-wrapper pf-project-details__project-image-wrapper--size-1">
                  <ProjectImageMap img={image} />
                </div>
    })}
  </article>
)