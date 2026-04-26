import React from "react";
import trark from "../assets/project/trark.png";
import movie from "../assets/project/movie app.png";
import sushi from "../assets/project/sushi website.jpg";
import weather from "../assets/project/weather app.png";
import mytube from "../assets/project/mytube.png"
import restautant from "../assets/project/restaurant.png";
import braid from "../assets/project/rachaelsbraid.png";
import resumeAi from "../assets/project/resume-ai.png";

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
          projectDesc={'Trark is a modern, responsive web application for tracking upcoming movies, TV series, and anime.'}
          toolList={['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Redux', 'Shadcn']}
          />
        <ProjectCard
          projectName={"Resume AI"}
          projectImage={resumeAi}
          projectLink={"https://theresume-ai.vercel.app/"}
          projectGithub={"https://github.com/msamichael/resume-ai"}
          projectDesc={'Resume AI is a tool that analyzes your resume against a job description and tells you exactly what\'s missing along with rewrites to fix it.'}
          toolList={['Next.js', 'TypeScript', 'Tailwind CSS', 'Groq API (LLama 3.3)']}
          
          />

<ProjectCard
  projectName={"Rachaels Braid Website"}
  projectImage={braid}
  projectLink={"https://rachaelsbraid.vercel.app/"}
  projectDesc={'A responsive landing page for a client\'s hair braiding service'}
  toolList={['Next.js', 'TypeScript', 'Tailwind CSS']}

  />
            <ProjectCard
          projectName={"Restaurant Reservation"}
          projectImage={restautant}
          projectGithub={"https://github.com/msamichael/restaurant-reservation-app"}
          projectDesc={'A full-stack Flutter application that handles restaurant bookings, availability checks, and a user-friendly reservation interface.'}
          toolList={['Flutter', 'Dart', 'Supabase']}
          />

      </div>
    </div>
  );
};

export default Projects;
