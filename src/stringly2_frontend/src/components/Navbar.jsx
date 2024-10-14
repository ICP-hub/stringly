import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenu, setIsmMenu] = useState(false);

    return (
        <div className="w-full relative bg-transparent fixed top-0 flex flex-col z-50">
            <div className='flex absolute top-0 left-0 right-0 text-white items-center bg-transparent justify-between px-8 py-4'>
                <div>
                    <p className='text-2xl font-semibold text-[#DC73B6]'>Logo</p>
                </div>
                <div className='hidden md:flex items-center justify-between gap-8'>
                    <p className='hover:bg-zinc-800 px-3 py-1 rounded-lg'>
                        <Link to="/">Home</Link>
                    </p>
                    <p className='hover:bg-zinc-800 px-3 py-1 rounded-lg'>
                        <Link to="/features">Features</Link>
                    </p>
                    <p>
                        <Link to="/product">About Us</Link>
                    </p>
                    <div className='flex items-center gap-2 hover:bg-zinc-800 px-3 py-1 rounded-lg'>
                        <Link to="/contact">Resources</Link>
                        <IoIosArrowDown />
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <button className={`px-4 py-2 rounded-xl ${isMenu ? 'hidden' : 'hidden md:flex'} bg-white text-black`}>Join</button>
                    </div>

                    <div className='flex md:hidden'>
                        <button className='text-xl' onClick={() => setIsmMenu(true)}>
                            {!isMenu && <IoIosMenu/>}
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
        closeMenu();
    };

    return (
        <div className={`nav fixed top-0 left-0 w-full h-full bg-white ${isMenu && !closing ? "slide-in" : closing ? "slide-out" : "hidden"}`}>
            <div className="flex justify-between w-full px-8 py-4">
                <p className='text-2xl font-semibold text-[#DC73B6]'>Logo</p>
                <div className='flex items-center gap-4'>
                    <div>
                        <button className={`px-4 py-1 rounded-xl bg-black text-white`}>Join</button>
                    </div>
                    <button className='text-xl' onClick={closeMenu}>
                        <RxCross1 />
                    </button>
                </div>
            </div>
            <div className='flex flex-col items-start gap-6 px-8 py-4'>
                <p className='hover:bg-zinc-200 px-3 py-1 rounded-lg' onClick={handleLinkClick}>
                    <Link to="/">Home</Link>
                </p>
                <p className='hover:bg-zinc-200 px-3 py-1 rounded-lg' onClick={handleLinkClick}>
                    <Link to="/features">Features</Link>
                </p>
                <p>
                    <Link to="/product">About Us</Link>
                </p>
                <div className='flex items-center gap-2 hover:bg-zinc-200 px-3 py-1 rounded-lg' onClick={handleLinkClick}>
                    <Link to="/contact">Resources</Link>
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    );
};
