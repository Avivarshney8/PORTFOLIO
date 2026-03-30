import mainContent, { sectionHeader } from "../constants/mainContent";
import Image from "next/image";
import OpenResumeButton from "../components/OpenResumeButton";
import { PiArrowRightFill } from "react-icons/pi";

function About() {

  const aboutParagraphs = mainContent.about.split('\n\n');

  return (
    <section className="mb-20">
      <h1 id={sectionHeader.about.toLowerCase()} className="mb-6 section text-2xl text-secondary-light font-medium">About Me</h1>
      <div className="flex justify-center items-center flex-col pb-4">
        <Image src="images/about-img.svg" className=" w-44 mb-5" alt="profile" priority width={200} height={200} />
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      <div className="flex justify-center lg:justify-start mt-4">
        <div className="group inline-flex items-center cursor-pointer">
          <div className="p-1">
            <OpenResumeButton />
            <hr className="w-0 transition-all duration-300 ease-in-out group-hover:w-full border-secondary" />
          </div>
          <PiArrowRightFill fill="#FFFFF0" className="ml-1 transition-all duration-300 ease-in-out group-hover:ml-4" />
        </div>
      </div>
    </section>
  );
}

export default About;
