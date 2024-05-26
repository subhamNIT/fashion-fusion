import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { footMenu, footSocial } from '../data/FooterData';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const iconMap = {
    FaFacebookF: <FaFacebookF />,
    FaTwitter: <FaTwitter />,
    FaInstagram: <FaInstagram />,
    FaLinkedinIn: <FaLinkedinIn />,
  };


const Footer = () => {

    const [subValue, setSubValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubValue('');
        alert('Thankyou, you are subscribed to receive our daily newsletter');
    };

    const currYear = new Date().getFullYear();


    return (
        <div className="bg-base-300 pt-16">
            <div className="ml-auto mr-auto max-w-screen-2xl px-3">
                <div className="grid grid-cols-1 sm:grid-cols-4 sm:justify-items-center justify-items-legacy  gap-8">
                    <div className="foot_about">
                        <h1>
                            <Link className='text-4xl' to="/">Fashion Fusion</Link>
                        </h1>
                        <div className="foot_subs">
                            <p className='my-4'>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    className="block w-full bg-transparent border-2 transition rounded-sm border-gray-300 p-3.5"
                                    placeholder="Email Address*"
                                    required
                                    value={subValue}
                                    onChange={(e) => setSubValue(e.target.value)}
                                />
                                <button type="submit" className="btn mt-3 bg-blue-600 hover:bg-blue-500">Subscribe</button>
                            </form>
                        </div>
                    </div>

                    {
                        footMenu.map(item => {
                            const { id, title, menu } = item;
                            return (
                                <div className="foot_menu" key={id}>
                                    <h2 className='text-2xl'>{title}</h2>
                                    <ul className='grid mt-7 gap-4'>
                                        {
                                            menu.map(item => {
                                                const { id, link, path } = item;
                                                return (
                                                    <li key={id}>
                                                        <Link to={path}>{link}</Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className="mt-10 opacity-70 border-base-100 border"></div>

            <div className="sub_footer">
                <div className="ml-auto mr-auto max-w-screen-2xl px-3">
                    <div className="block sm:flex justify-between items-center">
                        <div className="foot_copyright">
                            <p>
                                {currYear} | Fashion Fusion. All Rights Reserved.
                                Built by | <a href="https://gulshansongara.netlify.app/">Subham Gupta</a>
                            </p>
                        </div>
                        <div className="items-start flex text-xl gap-8 justify-start py-4 px-0 sm:p-16">
                            {
                                footSocial.map((item) => {
                                    const { id, icon, path } = item;
                                    return (
                                        <Link to={path} key={id}>{iconMap[icon]}</Link>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;