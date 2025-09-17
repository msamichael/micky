import React from "react";
import SkillCard from "../components/SkillCard";

const Skill = () => {
  return (
    <div className="skills" id="skills">
      <h2>Technologies</h2>
      <div className="skill-grid">
        <SkillCard
          skillIcon={"devicon-javascript-plain colored"}
          skillName={"JavaScript"}
        />
        <SkillCard
          skillIcon={"devicon-typescript-plain colored"}
          skillName={"TypeScript"}
        />
        <SkillCard
          skillIcon={"devicon-dart-plain colored"}
          skillName={"Dart"}
        />
        <SkillCard
          skillIcon={"devicon-firebase-plain colored"}
          skillName={"Firebase"}
        />
        <SkillCard
          skillIcon={"devicon-html5-plain colored"}
          skillName={"HTML"}
        />
        <SkillCard
          skillIcon={"devicon-css3-plain colored"}
          skillName={"CSS"}
        />
        <SkillCard
          skillIcon={"devicon-react-plain colored"}
          skillName={"React"}
        />
        <SkillCard
          skillIcon={"devicon-tailwindcss-plain colored"}
          skillName={"Tailwind CSS"}
        />
        <SkillCard
          skillIcon={"devicon-flutter-plain colored"}
          skillName={"Flutter"}
        />
        <SkillCard
          skillIcon={"devicon-supabase-plain colored"}
          skillName={"Supabase"}
        />
        <SkillCard
          skillIcon={"devicon-git-plain colored"}
          skillName={"Git"}
        />
        <SkillCard
          skillIcon={"devicon-github-original"}
          skillName={"Github"}
        />
      </div>
    </div>
  );
};

export default Skill;
