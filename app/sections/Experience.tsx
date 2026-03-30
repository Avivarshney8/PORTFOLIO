import { sectionHeader } from "../constants/mainContent";
import Experiences from "../components/Experiences";

function Experience() {

  return (
    <section className="mb-20 space-y-5">
      <h1 id={sectionHeader.experience.toLowerCase()} className="mb-6 section text-2xl text-secondary-light font-medium">{sectionHeader.experience}</h1>

      {[ {
        position: "Summer Training Trainee",
        company: "GOKBORU TECH PRIVATE LIMITED",
        location: "Remote",
        duration: "Jun '25 - Jul '25",
        jobDescription: [
          "Built full-stack applications using the <b>MERN Stack (MongoDB, Express.js, React, Node.js)</b>.",
          "Gained <b>hands-on experience</b> by developing a fully functional <b>E-commerce website</b> with features like product listing, cart, authentication, and order management.",
          "Strengthened <b>problem-solving skills</b> and <b>real-world development practices</b> through practical implementation."
        ],
      }].map((exp, index) => (
        <Experiences key={index} position={exp.position} company={exp.company} location={exp.location} duration={exp.duration}
          jobDescription={exp.jobDescription} />
      ))}



    </section>
  );
}

export default Experience;
