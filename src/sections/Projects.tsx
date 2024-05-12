import Project from "@/components/ProjectCard";
import autobotThumbnail from "@/assets/images/autobot.png";
import pThumbnail from "@/assets/images/modern-portfolio.png";
export default function Projects() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="projects">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Projects
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-7 md:mx-10 flex justify-center items-center flex-col md:flex-row md:flex-wrap mt-12 md:justify-start ">
          <Project
            title="PROJECT-AUTOBOT"
            description="API that sends a lot of beautiful, cute, and hot girl tiktok videos."
            image={autobotThumbnail}
            link="https://autobot-by-polongdev.onrender.com"
            repo="https://github.com/polongdev/project-autobot"
            langs={[
              "Nuxt",
              "JavaScript",
              "Express",
              "Node.js",
              "Tailwindcss",
              "MongoDB",
            ]}
          />
          <Project
            title="Modern Portfolio"
            description="A modern portfolio using react, tailwindcss and shadcn ui."
            image={pThumbnail}
            link="https://polongdev.onrender.com"
            repo="https://github.com/polongdev/modern-portfolio"
            langs={[
              "React",
              "Tailwindcss", 
              "TypeScript", 
              "ShadcnUI"
            ]}
          />
          <Project
            title="Modern Portfolio"
            description="A modern portfolio using react, tailwindcss and shadcn ui."
            image={pThumbnail}
            link="https://polongdev.onrender.com"
            repo="https://github.com/polongdev/modern-portfolio"
            langs={[
              "React",
              "Tailwindcss", 
              "TypeScript", 
              "ShadcnUI"
            ]}
          />
          
        </div>
      </section>
    </>
  );
}
