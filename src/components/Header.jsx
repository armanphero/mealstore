import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeetup } from '@fortawesome/free-brands-svg-icons'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const handleInput = (e) => {
        const newInput = e.target.value;
        setInput(newInput);
        if(newInput === '') {
            navigate('/meals');
            return;
        }
        navigate(`/search/${newInput}`)
    }
    const handleSearch = () => {
        navigate(`/search/${input}`)
    }
    // useEffect(() => {
    //     // console.log(input);
    // },[input])
    return (
        <nav className='my-container flex justify-between bg-slate-100 py-4 items-center relative'>
            <div>
                <Link to='/' className='flex items-center'>
                    <span className='text-blue-400 text-4xl mr-2'>
                        <FontAwesomeIcon icon={faMeetup} />
                    </span>
                    <span className='text-xl font-bold tracking-wide'>mealStore</span>
                </Link>
            </div>
            <div className='hidden lg:flex gap-10 font-semibold items-center'>
                <ul className='flex gap-6'>
                    <li className='hover:text-blue-500'>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
                            Home
                        </NavLink>
                    </li>
                    <li className='hover:text-blue-500'>
                        <NavLink
                            to='/meals'
                            className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
                            Meals
                        </NavLink>
                    </li>
                    <li className='hover:text-blue-500'>
                        <NavLink
                            to='/about'
                            className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
                            About
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <input type="text" placeholder='search' className='p-2 outline-none rounded-sm mr-2' onInput={(e) => handleInput(e)} />
                    <button className='btn' onClick={handleSearch}>Search</button>
                </div>
            </div>
            <button className='lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <FontAwesomeIcon icon={faBarsStaggered} />
            </button>
            {
                isMenuOpen && <div className='block lg:hidden absolute top-2 left-0 w-full z-10'>
                    <div className='font-semibold items-center bg-white px-5 py-3 w-[96%] mx-auto border rounded-md shadow-lg'>
                        <div className='flex justify-between'>
                            <Link
                                to='/'
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className='flex items-center'>
                                <span className='text-blue-400 text-4xl mr-2'>
                                    <FontAwesomeIcon icon={faMeetup} />
                                </span>
                                <span className='text-xl font-bold tracking-wide'>MealStore</span>
                            </Link>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                        <ul className='flex gap-5 flex-col my-5'>
                            <li className='hover:text-blue-500'>
                                <NavLink
                                    to='/'
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
                                    Home
                                </NavLink>
                            </li>
                            <li className='hover:text-blue-500'>
                                <NavLink
                                    to='/meals'
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
                                    Meals
                                </NavLink>
                            </li>
                            <li className='hover:text-blue-500'>
                                <NavLink
                                    to='/about'
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
                                    About
                                </NavLink>
                            </li>
                        </ul>
                        <div>
                            <input type="text" placeholder='search' className='p-2 outline-none rounded-sm mr-2' onInput={(e) => handleInput(e)} />
                            <button className='btn' onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
            }
        </nav>
    );
};

export default Header;