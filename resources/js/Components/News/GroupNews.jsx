import { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import NewsCard from './NewsCard';

const GroupNews = () => {
    const [news, setNews] = useState([
        {
            date: '12 Desember 2022',
            title: 'Berita Terbaru Kampus 1',
            description:
                'Description jdoadjawoijdaowjdoawjdoajwodjadawojdaoiwjd',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
            date: '13 Desember 2022',
            title: 'Berita Kampus 2',
            description: 'Deskripsi berita kedua dengan konten lainnya',
            image: 'https://images.unsplash.com/photo-1578877cc76d8.jpg',
        },
        {
            date: '14 Desember 2022',
            title: 'Berita Kampus 3',
            description: 'Informasi terbaru terkait acara kampus minggu depan',
            image: 'https://images.unsplash.com/photo-1575572150-34cfbe426321.jpg',
        },
    ]);

    return (
        <div className="mt-10">
            <h1 className="py-10 text-center text-3xl font-bold">
                Berita Campus
            </h1>
            <div className="grid grid-cols-1 items-center justify-items-center gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
                {news.map((article, index) => (
                    <NewsCard
                        key={index}
                        date={article.date}
                        title={article.title}
                        description={article.description}
                        image={article.image}
                    />
                ))}
            </div>
            <div className="flex justify-center py-10">
                <PrimaryButton>Selengkapnya</PrimaryButton>
            </div>
        </div>
    );
};

export default GroupNews;
