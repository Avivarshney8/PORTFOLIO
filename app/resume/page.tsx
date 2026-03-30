"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa6";
import experienceList from "../constants/experienceList";
import projectList from "../constants/projectList";
import Experience from "../sections/Experience"

const ResumePage = () => {
    return (
        <div className="min-h-screen bg-white text-black font-sans p-8 md:p-16 print:p-0">
            <div className="max-w-[800px] mx-auto bg-white">

                {/* Header */}
                <header className="text-center mb-6 border-b-2 border-gray-300 pb-4">
                    <h1 className="text-4xl font-bold uppercase tracking-wide text-gray-900 mb-2">Avi Varshney</h1>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
                        <a href="https://linkedin.com/in/aalokk/" target="_blank" className="flex items-center gap-1 hover:text-blue-600">
                            <FaLinkedin /> linkedin.com/in/avi-varshney/
                        </a>
                        <a href="https://github.com/aalok2006" target="_blank" className="flex items-center gap-1 hover:text-blue-600">
                            <FaGithub /> github.com/Avivarshney8
                        </a>
                        <a href="mailto:aalokkumar1902@gmail.com" className="flex items-center gap-1 hover:text-blue-600">
                            <FaEnvelope /> avinashvarshney8@gmail.com
                        </a>
                        <span className="flex items-center gap-1">
                            <FaPhone /> +91-9258342190
                        </span>
                    </div>
                </header>

                {/* Skills */}
                <section className="mb-6">
                    <h2 className="text-xl font-bold uppercase text-blue-800 border-b border-gray-300 mb-2">Skills</h2>
                    <div className="text-sm">
                        <div className="flex mb-1">
                            <span className="font-bold w-48 shrink-0">Programming Languages:</span>
                            <span className="text-gray-800">Python, C/C++, HTML, CSS, Java, JavaScript, Shell, PHP, OpenGLSL, Kotlin</span>
                        </div>
                        <div className="flex mb-1">
                            <span className="font-bold w-48 shrink-0">Database Management:</span>
                            <span className="text-gray-800">MySQL, PostgreSQL, MongoDB</span>
                        </div>
                        <div className="flex mb-1">
                            <span className="font-bold w-48 shrink-0">Cloud:</span>
                            <span className="text-gray-800">Microsoft Azure, Google Firebase</span>
                        </div>
                        <div className="flex mb-1">
                            <span className="font-bold w-48 shrink-0">Frameworks:</span>
                            <span className="text-gray-800">Flask, Spring, Express.js, Next.js, Laravel</span>
                        </div>
                        <div className="flex mb-1">
                            <span className="font-bold w-48 shrink-0">Tools & Platforms:</span>
                            <span className="text-gray-800">Git, GitHub, VS Code, Cursor, Android Studio, WSL, Google Colab, Shadertoy</span>
                        </div>
                        <div className="flex mb-1">
                            <span className="font-bold w-48 shrink-0">Soft Skills:</span>
                            <span className="text-gray-800">Leadership, Resilience, Task Prioritisation, Quick Learner, Adaptability</span>
                        </div>
                    </div>
                </section>

                {/* Internships */}
                <section className="mb-6">
                    <h2 className="text-xl font-bold uppercase text-blue-800 border-b border-gray-300 mb-2">Experience</h2>
                    {experienceList.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-bold text-gray-900 text-lg">
                                    {exp.position} | <span className="text-blue-700">{exp.company}</span>
                                </h3>
                                <span className="text-sm font-semibold text-gray-600">{exp.duration}</span>
                            </div>
                            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                                {exp.jobDescription.map((desc, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Projects */}
                <section className="mb-6">
                    <h2 className="text-xl font-bold uppercase text-blue-800 border-b border-gray-300 mb-2">Projects</h2>
                    {projectList.map((project, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-bold text-gray-900 text-lg">
                                    {project.projectTitle} | <a href={project.projectLink} target="_blank" className="text-blue-600 hover:underline text-sm ml-1">DEMO</a>
                                </h3>
                                {/* Dates aren't in projectList, assuming from image */}
                                <span className="text-sm font-semibold text-gray-600">
                                    {project.projectTitle.includes("Pahal") ? "Sep '25" : "May '25"}
                                </span>
                            </div>
                            <div className="text-sm text-gray-800 mb-1" dangerouslySetInnerHTML={{ __html: project.projectDescription }} />
                            <div className="text-xs font-semibold text-gray-700">
                                <span className="font-bold">Tech Stack:</span> {project.projectStacks.join(", ")}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Certificates */}
                <section className="mb-6">
                    <h2 className="text-xl font-bold uppercase text-blue-800 border-b border-gray-300 mb-2">Certificates</h2>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                        <li className="flex justify-between items-start">
                            <span>Full Stack Developer Bootcamp – Master Frontend to Backend | <span className="text-blue-700">GFG</span></span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Aug '25</span>
                        </li>
                        <li className="flex justify-between items-start">
                            <span>Advanced Prompt Hacking | <span className="text-blue-700">Learn Prompting</span></span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Jul '25</span>
                        </li>
                        <li className="flex justify-between items-start">
                            <span>Blue Team Junior Analyst | <span className="text-blue-700">Security Blue Team</span></span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Jul '25</span>
                        </li>
                        <li className="flex justify-between items-start">
                            <span>Software Engineer Intern | <span className="text-blue-700">HackerRank</span></span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Jul '25</span>
                        </li>
                        <li className="flex justify-between items-start">
                            <span>Frontend Developer (React) | <span className="text-blue-700">HackerRank</span></span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Jun '25</span>
                        </li>
                        <li className="flex justify-between items-start">
                            <span>SQL (Advanced) | <span className="text-blue-700">HackerRank</span></span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Jun '25</span>
                        </li>
                        <li className="flex justify-between items-start">
                            <span>Java SE 11 Programmer II | <span className="text-blue-700">SkillSoft</span></span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Jun '25</span>
                        </li>
                        <li className="flex justify-between items-start">
                            <span>Backend Development Course | <span className="text-blue-700">PhysicsWallah</span></span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Oct '23</span>
                        </li>
                    </ul>
                </section>

                {/* Achievements & Volunteering */}
                <section className="mb-6">
                    <h2 className="text-xl font-bold uppercase text-blue-800 border-b border-gray-300 mb-2">Achievements & Volunteering</h2>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                        <li className="flex justify-between items-start">
                            <span>Finalist (Top 50) | Smart India Hackathon (SIH)</span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Sep '25</span>
                        </li>
                        <li className="flex justify-between items-start">
                            <span>Top 1% on THM with 60+ days streak | <span className="text-blue-700">THM</span></span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Jul '25</span>
                        </li>
                        <li className="flex justify-between items-start">
                            <span>Finalist (Top 19) | Association of Indian Universities (AIU)</span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Mar '25</span>
                        </li>
                        <li className="flex justify-between items-start">
                            <span>Academic Mentor | Pahal NGO</span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Jul '24</span>
                        </li>
                        <li className="flex justify-between items-start">
                            <span>5-Star Rating (Python & Problem Solving) | <span className="text-blue-700">HackerRank</span></span>
                            <span className="font-semibold text-gray-600 whitespace-nowrap ml-4">Mar '24</span>
                        </li>
                    </ul>
                </section>

                {/* Education */}
                <section className="mb-6">
                    <h2 className="text-xl font-bold uppercase text-blue-800 border-b border-gray-300 mb-2">Education</h2>
                    <div className="text-sm">
                        <div className="flex justify-between mb-1">
                            <span className="font-bold">• Lovely Professional University</span>
                            <span className="font-semibold text-gray-600">Punjab, India</span>
                        </div>
                        <div className="flex justify-between mb-2 pl-4">
                            <span>Bachelor of Technology - Computer Science and Engineering; <span className="font-bold">CGPA: 7.7</span></span>
                            <span className="italic text-gray-600">Since Aug '23</span>
                        </div>

                        <div className="flex justify-between mb-1">
                            <span className="font-bold">• Army Public School, Jalandhar Cantt</span>
                            <span className="font-semibold text-gray-600">Punjab, India</span>
                        </div>
                        <div className="flex justify-between mb-2 pl-4">
                            <span>Intermediate - PCM; <span className="font-bold">Percentage: 71.4</span></span>
                            <span className="italic text-gray-600">Apr '22 - Mar '23</span>
                        </div>

                        <div className="flex justify-between mb-1">
                            <span className="font-bold">• Army Public School, Jalandhar Cantt</span>
                            <span className="font-semibold text-gray-600">Punjab, India</span>
                        </div>
                        <div className="flex justify-between mb-2 pl-4">
                            <span>Matriculation; <span className="font-bold">Percentage: 81.6</span></span>
                            <span className="italic text-gray-600">Apr '20 - Mar '21</span>
                        </div>
                    </div>
                </section>

            </div>

            {/* Print Button */}
            <div className="fixed bottom-8 right-8 print:hidden">
                <button
                    onClick={() => window.print()}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all"
                >
                    Print / Save as PDF
                </button>
            </div>
        </div>
    );
};

export default ResumePage;
