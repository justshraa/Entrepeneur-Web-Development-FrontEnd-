import React from 'react' 
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="fixed top-0 bg-cyan-50 font-bold w-full  text-black">
            <ul className='text-2xl py-4'>
                <li className="inline-block pr-6 ">
                <img src='/images/logo.png' alt="Entrepreneur" className="w-[250px] h-[80px] inline-block " />
                </li>
                <li className="inline-block ">
                    <Link to ="/" className='py-6 pr-8'>
                    Hero Section
                    </Link>
                </li>
                {/* <li className="inline-block ">
                    <Link to ="/about" className='py-6 pr-8'>
                        Main section
                    </Link>
                </li> */}
                <li className="inline-block ">
                    <Link to ="/article-list" className='py-6 pr-8'>
                        Notification
                    </Link>
                </li>
                <li className="inline-block ">
                    <Link to ="/notification" className='py-6 pr-8'>
                        FAQ
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar