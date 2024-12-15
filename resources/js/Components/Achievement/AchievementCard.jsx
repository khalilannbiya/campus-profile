const AchievementCard = ({ rank, title, image }) => {
    return (
        <div className="h-auto w-[270px] rounded-md bg-white p-6 shadow-md">
            {/* Image Section */}
            <div className="relative h-[150px] w-full overflow-hidden rounded-md">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>
            {/* Content Section */}
            <div className="mt-4 text-center">
                <h1 className="text-2xl font-bold">{rank}</h1>
                <p className="text-lg font-semibold text-gray-500">{title}</p>
            </div>
        </div>
    );
};

export default AchievementCard;
