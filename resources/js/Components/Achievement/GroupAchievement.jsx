import { useState } from 'react';
import AchievementCard from './AchievementCard';

const GroupAchievement = () => {
    const [achievements, setAchievements] = useState([
        {
            rank: '#10',
            title: 'Nama Penghargaan 1',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
            rank: '#9',
            title: 'Nama Penghargaan 2',
            image: 'https://images.unsplash.com/photo-1565180568-e5b8b0abcc61?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OHwwfDF8c2VhcmNofDJ8fHRvZ3xlbnwwfHx8fDE2NzYxMzg0OTk&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            rank: '#8',
            title: 'Nama Penghargaan 3',
            image: 'https://images.unsplash.com/photo-1532583000150-b9d0fc23c9b2?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OHwwfDF8c2VhcmNofDhzfHxjb3VwbGV8ZW58MHx8fHwxNjc2MTM4Mjkw&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            rank: '#7',
            title: 'Nama Penghargaan 4',
            image: 'https://images.unsplash.com/photo-1580144049292-c5a6ed96c8db?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OHwwfDF8c2VhcmNofDd8fGZhdGFsYmx1Z3xlbnwwfHx8fDE2NzYxMzg3NjM&ixlib=rb-1.2.1&q=80&w=1080',
        },
    ]);

    return (
        <div className="my-10 grid grid-cols-1 items-center justify-items-center gap-4 bg-primary px-4 py-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {achievements.map((achievement, index) => (
                <AchievementCard
                    key={index}
                    rank={achievement.rank}
                    title={achievement.title}
                    image={achievement.image}
                />
            ))}
        </div>
    );
};

export default GroupAchievement;
