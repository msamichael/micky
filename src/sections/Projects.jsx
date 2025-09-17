import React from "react";
import movie from "../assets/project/movie app.png";
import sushi from "../assets/project/sushi website.jpg";
import todo from "../assets/project/todo app.png";
import weather from "../assets/project/weather app.png";
import mytube from "../assets/project/mytube.png"

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="project" id="project">
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard
          projectName={"Movie App"}
          projectImage={movie}
          projectLink={"https://movie-app-mucl.vercel.app/"}
          projectGithub={"https://github.com/msamichael/movie-app"}
        />
        <ProjectCard
          projectName={"MyTube"}
          projectImage={mytube}
          projectLink={"https://mytube-doyf.vercel.app/"}
          projectGithub={"https://github.com/msamichael/mytube"}
        />
        <ProjectCard
          projectName={"Sushi Landing Page"}
          projectImage={sushi}
          projectLink={"https://sushi-landing-page-chi.vercel.app/"}
          projectGithub={"https://github.com/msamichael/sushi-landing-page"}
        />
        <ProjectCard
          projectName={"Todo app"}
          projectLink={"https://todo-app-nine-pi-59.vercel.app/"}
          projectImage={todo}
          projectGithub={"https://github.com/msamichael/todo-app"}
        />
        <ProjectCard
          projectName={"Weather App"}
          projectImage={weather}
          projectLink={"https://weather-hue0esauh-msamichaels-projects.vercel.app/"}
          projectGithub={"https://github.com/msamichael/weather-app"}
        />
      </div>
    </div>
  );
};

export default Projects;
