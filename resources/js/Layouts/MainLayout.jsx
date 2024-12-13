
import Navbar from '@/Components/common/Navbar';
import Hero from '@/Components/common/Hero';
import FooterComponent from '@/Components/common/FooterComponent';

const MainLayout = ({ children }) => (
    <div className="home-container">
        <Navbar />
        <Hero />
        <main>{children}</main>
        <FooterComponent />
    </div>
);

export default MainLayout;
