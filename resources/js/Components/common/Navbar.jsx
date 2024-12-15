import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ApplicationLogo from '../ApplicationLogo';

const Navbar = () => {
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);

    const toggleSidenav = () => {
        setIsSidenavOpen(!isSidenavOpen);
    };

    return (
        <div className="fixed top-0 z-50 w-full">
            {/* Navbar */}
            <div className="bg-primary text-white">
                <div className="mx-auto max-w-7xl px-4 py-2 xl:px-0">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div>
                            <Link href="/">
                                <ApplicationLogo className="h-12 w-12 fill-current text-white" />
                            </Link>
                        </div>
                        {/* Navigation Links */}
                        <div className="hidden items-center gap-4 md:flex">
                            <Link href="#">Berita</Link>
                            <Link href="#">Tentang Kami</Link>
                            <Link href="#">Pengumuman</Link>
                            <Link href="#">Agenda</Link>
                        </div>
                        {/* Burger Menu */}
                        <div
                            className="cursor-pointer md:hidden"
                            onClick={toggleSidenav}
                        >
                            {isSidenavOpen ? <X /> : <Menu />}
                        </div>
                    </div>
                </div>
            </div>
            {/* Sidenav for Mobile */}
            <div
                className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-primary text-white shadow-lg transition-transform duration-300 ease-in-out ${
                    isSidenavOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-4">
                    <Link href="#" className="mb-4 block text-lg font-semibold">
                        Berita
                    </Link>
                    <Link href="#" className="mb-4 block text-lg font-semibold">
                        Tentang Kami
                    </Link>
                    <Link href="#" className="mb-4 block text-lg font-semibold">
                        Pengumuman
                    </Link>
                    <Link href="#" className="mb-4 block text-lg font-semibold">
                        Agenda
                    </Link>
                    <Link href="#" className="mb-4 block text-lg font-semibold">
                        Kontak
                    </Link>
                </div>
            </div>
            {/* Overlay (optional, for closing sidenav when clicked outside) */}
            {isSidenavOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
                    onClick={toggleSidenav}
                />
            )}
        </div>
    );
};

export default Navbar;
