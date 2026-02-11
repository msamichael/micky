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
          skillIcon={"devicon-nextjs-plain "}
          skillName={"Next.js"}
        />
        <SkillCard
          skillIcon={"devicon-typescript-plain colored"}
          skillName={"TypeScript"}
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
        <SkillCard
        skillIcon={"devicon-express-original"}
        skillName={'Express js'}
        />
        <SkillCard
        skillIcon={"devicon-nodejs-plain-wordmark colored"}
        skillName={'Node js'}
        />
        {/* <SkillCard
        skillIcon={"devicon-prisma-original colored"}
        skillName={'Prisma'}
        /> */}
        {/* <SkillCard
        skillIcon={"devicon-postgresql-plain-wordmark colored"}
        skillName={'PostgreSQL'}
        /> */}
      </div>
    </div>
  );
};

export default Skill;
