import MainLayout from '@/Layouts/MainLayout';

const AllNews = () => {
    return (
        <MainLayout className="">
            <div className="mt-16">
                <div className="flex h-52 w-full items-center justify-center border-b-4 border-primary">
                    <h1 className="text-center text-3xl font-bold text-primary">
                        Semua Berita
                    </h1>
                </div>
            </div>
        </MainLayout>
    );
};

export default AllNews;
