import GroupAchievement from '@/Components/Achievement/GroupAchievement';
import GroupAgenda from '@/Components/Agenda/GroupAgenda';
import GroupAnnouncement from '@/Components/Announcement/GroupAnnouncement';
import AboutMe from '@/Components/common/AboutMe';
import Carousel from '@/Components/common/Carousel';
import GroupNews from '@/Components/News/GroupNews';
import MainLayout from '@/layouts/MainLayout';

const Home = () => (
    <MainLayout>
        <div className="">
            <GroupNews />
            <AboutMe />
            <GroupAchievement />
            <GroupAnnouncement />
            <GroupAgenda />
        </div>
        <Carousel />
    </MainLayout>
);

export default Home;
