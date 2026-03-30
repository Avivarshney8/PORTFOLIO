import { SiTailwindcss, SiReact, SiDaisyui, SiTypescript, SiNodedotjs, SiExpress, SiPostgresql, SiGithub, SiGit, SiVercel, SiMongodb, SiPython, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiPhp, SiKotlin, SiMicrosoftazure, SiFirebase, SiFlask, SiSpring, SiLaravel, SiVisualstudiocode, SiAndroidstudio, SiMysql, SiOpengl, SiGnubash, SiR, SiScala, SiWindows, SiArchlinux, SiLinuxmint, SiUbuntu, SiDebian } from "react-icons/si"
import { PiBracketsCurly } from "react-icons/pi";
import { FaJava } from "react-icons/fa6";
// import { RiNextjsFill } from "react-icons/ri";

const stacksIconObj = {
    // Coding Languages
    "Python": SiPython,
    "C/C++": SiCplusplus,
    "HTML": SiHtml5,
    "CSS": SiCss3,
    "Java": FaJava,
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "PHP": SiPhp,
    "Kotlin": SiKotlin,
    "Shell Scripting": SiGnubash,
    "R": SiR,
    "Scala": SiScala,
    "OpenGLSL": SiOpengl || PiBracketsCurly,

    // Frameworks
    "React": SiReact,
    "Next.js": SiReact,
    "Tailwind CSS": SiTailwindcss,
    "Express.js": SiExpress,
    "Flask": SiFlask,
    "Spring": SiSpring,
    "Laravel": SiLaravel,
    "MySQL": SiMysql || SiPostgresql,
    "PostgreSQL": SiPostgresql,
    "MongoDB": SiMongodb,
    "Firebase": SiFirebase,

    // Platforms
    "Azure": SiMicrosoftazure,
    "Git": SiGit,
    "GitHub": SiGithub,
    "VS Code": SiVisualstudiocode,
    "Android Studio": SiAndroidstudio,
    "Google Colab": PiBracketsCurly,
    "WSL": SiWindows,
    "EXODIA": SiArchlinux,
    "Linux MINT": SiLinuxmint,
    "UBUNTU": SiUbuntu,
    "DEBIAN": SiDebian,
}

export default stacksIconObj;