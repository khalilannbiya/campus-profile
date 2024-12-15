import { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import AnnouncementCard from './AnnouncementCard';

const GroupAnnouncement = () => {
    const [announcements, setAnnouncements] = useState([
        {
            date: '10 Desember 2024',
            description:
                'Deskripsi pengumuman adawhdiahdaidhaihdiwahdaiudhaiuwdhiahd',
        },
        {
            date: '11 Desember 2024',
            description: 'Pengumuman lainnya dengan detail yang berbeda',
        },
        {
            date: '12 Desember 2024',
            description: 'Pengumuman ketiga dengan isi lainnya',
        },
        {
            date: '13 Desember 2024',
            description: 'Deskripsi pengumuman keempat yang berbeda',
        },
    ]);

    return (
        <div className="px-4 mx-auto max-w-7xl">
            <div className="flex items-center gap-10">
                <h1 className="text-center text-3xl font-bold">Pengumuman</h1>
                <div className="h-3 flex-1 bg-primary"></div>
            </div>
            <div className="my-10 grid grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
                {announcements.map((announcement, index) => (
                    <AnnouncementCard
                        key={index}
                        date={announcement.date}
                        description={announcement.description}
                    />
                ))}
            </div>
            <div className="mb-10 flex justify-center">
                <PrimaryButton>Selengkapnya</PrimaryButton>
            </div>
        </div>
    );
};

export default GroupAnnouncement;
