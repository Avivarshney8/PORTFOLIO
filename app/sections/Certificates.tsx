import { sectionHeader } from "../constants/mainContent";
import certificateList from "../constants/certificateList";
import CertificateCard from "../components/CertificateCard";

function Certificates() {
    return (
        <section className="mb-20 space-y-5">
            <h1
                id={sectionHeader.certificates.toLowerCase()}
                className="mb-6 section text-2xl text-secondary-light font-medium"
            >
                {sectionHeader.certificates}
            </h1>

            <div className="flex flex-col gap-4">
                {certificateList.map((cert, index) => (
                    <CertificateCard
                        key={index}
                        title={cert.title}
                        issuer={cert.issuer}
                        date={cert.date}
                    />
                ))}
            </div>
        </section>
    );
}

export default Certificates;
