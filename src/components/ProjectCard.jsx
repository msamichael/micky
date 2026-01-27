import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  projectName,
  projectImage,
  projectLink,
  projectGithub,
  projectDesc,
  toolList,
  inProgress
}) => {
  return (
    <div className="project-card">
      <div className="project-mainview">
        <img src={projectImage} alt="project image" />
        <div className="proj-name-bg">
          <h3 className="project-name">{projectName}</h3>
        </div>
      </div>
      <div className="project-details">
        {inProgress && <div className="ongoing"><p >In Progress</p> </div>}
        <p className="description">
          {projectDesc}        </p>

        <div className="project-footer">
          
            <ul className="tools">
           
              {toolList.map((tool) => (
                <li className="tool-card"><p>
                  
                  {tool}
                  </p>
                  </li>
              ))}

            </ul>
          

          <div className="links">
            {projectLink && <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <FiExternalLink size={23} color="#1A1A1A"/>
            </a>}
            <a href={projectGithub} target="_blank" rel="noopener noreferrer">
              <FiGithub size={23} color="#1A1A1A"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
