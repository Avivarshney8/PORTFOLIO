import { sectionHeader } from "../constants/mainContent";
import ProjectList from "../components/ProjectList";
import projectList from "../constants/projectList";

const ariseProject = {
  projectTitle: "ARISE",
  projectDescription: "A <b>full-stack multi-vendor e-commerce marketplace</b> using the <b>MERN stack</b>. Features include <b>JWT authentication</b>, <b>vendor management</b>, <b>shopping cart</b>, and <b>secure payments</b>. The frontend is built with <b>React 19</b>, <b>Vite</b>, and <b>GSAP</b> for high performance and smooth animations. The backend utilizes <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b> with <b>Mongoose</b> for robust data handling and <b>Helmet</b> for security.",
  imgPath: "/images/arise_cover.png",
  projectGithubLink: "https://github.com/aalok2006/arise",
  projectLink: "https://sokoo.vercel.app/",
  projectStacks: [
    "React 19",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Vite",
    "GSAP",
    "JWT",
    "Mongoose"
  ],
};

function Projects() {


  return (
    <section className="mb-20 space-y-5">
      <h1
        id={sectionHeader.projects.toLowerCase()}
        className="mb-6 section text-2xl text-secondary-light font-medium"
      >
        {sectionHeader.projects}
      </h1>

      <ProjectList items={[...projectList, ariseProject]} />
    </section>
  );
}

export default Projects;
