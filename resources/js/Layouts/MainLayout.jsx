
import Navbar from '@/Components/common/Navbar';
import FooterComponent from '@/Components/common/FooterComponent';

const MainLayout = ({ children }) => (
    <div className="home-container">
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <FooterComponent />
    </div>
);

export default MainLayout;
