import React from "react";
import { FiGithub, FiExternalLink} from "react-icons/fi";

const ProjectCard = ({projectName, projectImage,projectLink, projectGithub}) => {
  return (
      <div className="project-card">
        <img src={projectImage} alt="movie-app" />
        <div className="project-details">
          <h3>{projectName}</h3>
          <div className="links">
            
            <a href={projectLink} target="_blank" rel="noopener noreferrer"><FiExternalLink size={25}  /></a>
            <a href={projectGithub} target="_blank" rel="noopener noreferrer"><FiGithub size={25} /></a>
            
          </div>
        </div>
      </div>
    
  );
};

export default ProjectCard;
