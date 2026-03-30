
type ExperiencesProps = {
    position: React.ReactNode,
    company: React.ReactNode,
    location: React.ReactNode,
    duration: React.ReactNode
    jobDescription: string[],
}

function Experiences(props: ExperiencesProps) {

    const { position, company, location, duration, jobDescription } = props;

    return (
        <div className="flex rounded-xl gap-3 transition-all duration-300 ease-in-out border p-4 border-secondary group hover:border-secondary-light relative">

            <div className="w-full">

                <div className="flex items-start justify-between mb-2">
                    <h1 className="text-xl text-ivory transition-all duration-300 ease-in-out group-hover:text-secondary-light font-medium">{position}</h1>
                    <p className="text-sm transition-all group-hover:text-ivory text-right ml-auto whitespace-nowrap pl-4">{duration}</p>
                </div>

                <h2 className=" text-md text-ivory transition-all duration-300 ease-in-out group-hover:text-secondary-light">{company}</h2>
                <h3 className="text-sm mb-4 transition-all group-hover:text-ivory font-light">{location}</h3>
                <ul>

                    {jobDescription.map((description, index) => (
                        <li key={index} className="group-hover:text-ivory text-xs font-extralight mb-2" dangerouslySetInnerHTML={{ __html: "- " + description }} />
                    ))}

                </ul>
            </div>

        </div>
    )
}

export default Experiences
