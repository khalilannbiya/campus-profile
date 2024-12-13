import { Card } from 'flowbite-react';

const NewsCard = ({ date, title, description, image }) => {
    return (
        <Card
            className="h-[380px] max-w-sm overflow-hidden"
            renderImage={() => (
                <div
                    className="relative h-0 w-full overflow-hidden"
                    style={{ paddingBottom: '56.25%' }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 h-full w-full object-cover"
                        width={500}
                        height={500}
                    />
                </div>
            )}
        >
            <div className=" break-all truncate">
                <p className="text-sm text-gray-500">{date}</p>
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="text-md text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </Card>
    );
};

export default NewsCard;
