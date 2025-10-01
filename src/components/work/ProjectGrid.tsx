import ProjectCard from "./ProjectCard";
import { projects, ProjectProps } from "./projectDetails";
import React from "react";

const ProjectGrid = () => {
  console.log("ProjectGrid rendering with projects:", projects.length);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6 sm:space-y-8">
        {projects.map((project: ProjectProps) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            techNames={project.techNames}
            techLinks={project.techLinks}
            github={project.github}
            demo={project.demo}
            image={project.image}
            available={project.available}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
