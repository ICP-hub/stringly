import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenu, setIsmMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const imgHeight = 1;
            setScrolled(window.scrollY > imgHeight);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`w-full max-w-[1540px] mx-auto flex flex-col bg-transparent fixed top-0 z-50 px-4 text-black navbar !z-00 ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className='flex w-full text-white items-center justify-between px-4 py-4 md:px-8 md:py-4'>
                <div>
                    <p
                        className="text-[30px] leading-[72px] font-sf font-semibold text-[#DC73B6] bg-clip-text text-transparent"
                        style={{
                            backgroundImage: 'linear-gradient(90.4deg, #D83694 29.82%, #0039C7 95.61%)'
                        }}
                    >
                        Stringly
                    </p>

                </div>
                <div className='hidden font-sfProDisplay md:flex items-center font-light justify-between gap-8'>
                    <p className='hover:bg-white/20 hover:backdrop-blur-lg hover:bg-opacity-30 rounded-lg px-3 py-1 rounded-lg'>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                    </p>
                    <p className='hover:bg-white/20 hover:backdrop-blur-lg hover:bg-opacity-30 rounded-lg px-3 py-1 rounded-lg'>
                        <Link to="/features" onClick={() => window.scrollTo(0, 0)}>Features</Link>
                    </p>
                    <p className='hover:bg-white/20 hover:backdrop-blur-lg hover:bg-opacity-30 rounded-lg px-3 py-1 rounded-lg'>
                        <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
                    </p>
                    <div className='flex items-center gap-2 hover:bg-white/20 hover:backdrop-blur-lg hover:bg-opacity-30 rounded-lg px-3 py-1 rounded-lg'>
                        <p className='flex items-center justify-between gap-2'>Resources <IoIosArrowDown /></p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <button className={`px-10 py-2 rounded-xl ${isMenu ? 'hidden' : 'hidden md:flex'} bg-white text-black`}>Join</button>
                    </div>
                    <div className='flex md:hidden'>
                        <button className='text-xl' onClick={() => setIsmMenu(true)}>
                            {!isMenu && <IoIosMenu />}
                        </button>
                    </div>
                </div>
            </div>
            {
                isMenu && <Menu isMenu={isMenu} setIsmMenu={setIsmMenu} />
            }
        </div>
    );
};

export default Navbar;

export const Menu = ({ isMenu, setIsmMenu }) => {
    const [closing, setClosing] = useState(false);

    const closeMenu = () => {
        setClosing(true);
        setTimeout(() => {
            setIsmMenu(false);
            setClosing(false);
        }, 1000);
    };

    const handleLinkClick = () => {
        // Scroll to top of the page
        window.scrollTo(0, 0);
        closeMenu();
    };

    return (
        <div className={`nav fixed top-0 left-0 w-full h-full bg-white !z-1000 ${isMenu && !closing ? "slide-in" : closing ? "slide-out" : "hidden"}`}>
            <div className="flex justify-between w-full px-8 py-4">
                <p
                    className="text-[18px] leading-[72px] font-sf font-semibold text-[#DC73B6] bg-clip-text text-transparent"
                    style={{
                        backgroundImage: 'linear-gradient(90.4deg, #D83694 29.82%, #0039C7 95.61%)'
                    }}
                >
                    Stringly
                </p>
                <div className='flex items-center gap-4'>
                    <div>
                        <button className={`px-4 py-1 rounded-xl bg-black text-white`}>Join</button>
                    </div>
                    <button className='text-xl' onClick={closeMenu}>
                        <RxCross1 />
                    </button>
                </div>
            </div>
            <div className='flex flex-col items-start font-light justify-start gap-6 px-6 py-4'>
                <p className='hover:bg-zinc-200 px-3 py-1 rounded-lg' onClick={handleLinkClick}>
                    <Link to="/">Home</Link>
                </p>
                <p className='hover:bg-zinc-200 px-3 py-1 rounded-lg' onClick={handleLinkClick}>
                    <Link to="/features">Features</Link>
                </p>
                <p className='hover:bg-zinc-200 px-3 py-1 rounded-lg' onClick={handleLinkClick}>
                    <Link to="/about">About Us</Link>
                </p>
                <div className='flex items-center gap-2 hover:bg-zinc-200 px-3 py-1 rounded-lg' onClick={handleLinkClick}>
                    <p className='flex items-center justify-between gap-2'>Resources <IoIosArrowDown /></p>
                </div>
            </div>
        </div>
    );
};
