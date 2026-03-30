
type CertificateCardProps = {
    title: string;
    issuer: string;
    date: string;
}

function CertificateCard({ title, issuer, date }: CertificateCardProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-xl p-4 border border-secondary transition-all duration-300 ease-in-out hover:border-secondary-light hover:bg-white/5">
            <div>
                <h3 className="text-lg font-medium text-ivory group-hover:text-secondary-light">{title}</h3>
                <p className="text-sm text-gray-400 mt-1">Issued by <span className="text-secondary-light">{issuer}</span></p>
            </div>
            <span className="text-sm text-gray-500 mt-2 sm:mt-0 font-mono bg-white/10 px-2 py-1 rounded">{date}</span>
        </div>
    )
}

export default CertificateCard;
