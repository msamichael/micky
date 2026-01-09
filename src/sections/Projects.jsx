import React from "react";
import trark from "../assets/project/trark.png";
import movie from "../assets/project/movie app.png";
import sushi from "../assets/project/sushi website.jpg";
import todo from "../assets/project/todo app.png";
import weather from "../assets/project/weather app.png";
import mytube from "../assets/project/mytube.png"
import restautant from "../assets/project/restaurant.png";

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="project" id="project">
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard
          projectName={"Trark"}
          projectImage={trark}
          projectLink={"https://trarkapp.vercel.app/"}
          projectGithub={"https://github.com/msamichael/trark"}
          projectDesc={'Trark is modern, responsive web application for tracking upcoming movies, TV series, and anime.'}
          toolList={['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Redux', 'Shadcn']}
          />
        <ProjectCard
          projectName={"MyTube"}
          projectImage={mytube}
          projectLink={"https://mytube-doyf.vercel.app/"}
          projectGithub={"https://github.com/msamichael/mytube"}
          projectDesc={'A YouTube-style video streaming clone built with React + Vite.'}
          toolList={['React','JavaScript', 'Material UI']}
          />
        <ProjectCard
          projectName={"Movie App"}
          projectImage={movie}
          projectLink={"https://movie-app-view.vercel.app/"}
          projectGithub={"https://github.com/msamichael/movie-app"}
          projectDesc={'A responsive React web app for browsing and discovering movies.'}
          toolList={['React', 'JavaScript', 'Tailwind CSS', 'Firebase']}
          />
        <ProjectCard
          projectName={"Restaurant Reservation"}
          projectImage={restautant}
          projectGithub={"https://github.com/msamichael/restaurant-reservation-app"}
          projectDesc={'A full-stack Flutter application that handles restaurant bookings, availability checks, and a user-friendly reservation interface.'}
          toolList={['Flutter', 'Dart', 'Supabase']}
          />
        <ProjectCard
          projectName={"Sushi Landing Page"}
          projectImage={sushi}
          projectLink={"https://sushi-landing-page-chi.vercel.app/"}
          projectGithub={"https://github.com/msamichael/sushi-landing-page"}
          projectDesc={'A responsive landing page template for a sushi restaurant.'}
          toolList={['HTML', 'CSS', 'JavaScript']}
          />
        <ProjectCard
          projectName={"Todo app"}
          projectLink={"https://todo-app-nine-pi-59.vercel.app/"}
          projectImage={todo}
          projectGithub={"https://github.com/msamichael/todo-app"}
          projectDesc={'A simple todo list app for managing tasks.'}
          toolList={['React', 'JavaScript', 'Tailwind CSS']}
          />
        <ProjectCard
          projectName={"Weather App"}
          projectImage={weather}
          projectLink={"https://weather-app-blu.vercel.app/"}
          projectGithub={"https://github.com/msamichael/weather-app"}
          projectDesc={'A weather information app (frontend) that fetches and displays weather data for user-selected locations.'}
          toolList={['React' , 'JavaScript', 'Tailwind CSS']}
        />
      </div>
    </div>
  );
};

export default Projects;
