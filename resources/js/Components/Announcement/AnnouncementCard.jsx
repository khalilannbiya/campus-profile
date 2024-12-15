const AnnouncementCard = ({ date, description }) => {
    return (
        <div className="max-w-xs rounded-md border border-gray-200 bg-white p-4 shadow-md transition hover:shadow-lg">
            <p className="text-sm font-semibold text-gray-500">{date}</p>
            <p className="text-md mt-2 line-clamp-2 break-all font-bold text-gray-900">
                {description}
            </p>
        </div>
    );
};

export default AnnouncementCard;
