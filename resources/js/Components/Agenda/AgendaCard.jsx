const AgendaCard = ({ date, title, description }) => {
    return (
        <div className="flex max-w-sm cursor-pointer items-center overflow-hidden rounded-md border border-gray-200 bg-white shadow-md transition hover:border-primary hover:shadow-lg">
            {/* Date Section */}
            <div className="flex h-32 w-32 flex-col items-center justify-center bg-primary text-center text-white">
                <p className="text-2xl font-bold">{date.day}</p>
                <p className="text-lg">{date.month}</p>
                <p className="text-sm">{date.year}</p>
            </div>
            {/* Content Section */}
            <div className="w-full break-all p-4">
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default AgendaCard;
