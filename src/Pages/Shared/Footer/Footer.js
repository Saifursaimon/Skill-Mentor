import React from 'react';
import { FaCopyright, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-dark mt-5'>
            <div className="container p-4">
                <div className="row">
                    <div className='col-md-6 col-lg-5 col-12 text-white my-5'>
                        <h4 className='mb-4 fw-bold'>Skill Mentor</h4>
                        <p className='w-75'>Welcome to Skill Mentor – Your Gateway to Mastering Web Development! Embark on a transformative journey into the world of web development with our comprehensive and hands-on courses. </p>
                        <div className='d-flex'>
                            <a className='text-white' href='https://www.facebook.com/saifurrahman.saimon.92' target='blank'><FaFacebookF className='fs-4 ms-2'></FaFacebookF></a>
                            <a className='text-white' href='https://www.instagram.com/saimon.__s/' target='blank'><FaInstagram className='fs-4 ms-2'></FaInstagram></a>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 col-12 text-white my-5'>
                        <h4 className='mb-4 fw-bold'>Useful Links</h4>
                        <p><Link className='text-decoration-none text-white' to='/login'>Your Account</Link></p>
                        <p><Link className='text-decoration-none text-white' to='/register'>Become an user</Link></p>
                        <p><Link className='text-decoration-none text-white' to='/courses'>Courses</Link></p>
                    </div>
                    <div className='col-md-6 col-lg-4 col-12 text-white my-5'>
                        <h4 className='mb-4 fw-bold'>Contacts</h4>
                        <p><AiOutlineMail className='fs-4'></AiOutlineMail> saimon32kg@gmail.com</p>
                        <p><AiOutlinePhone className='fs-4'></AiOutlinePhone> 01619425521</p>
                        <p><AiOutlineHome className='fs-4'></AiOutlineHome> 414/1,Prani Hospital Road,32,Kishoreganj</p>
                    </div>
                </div>
            </div>
            <div className='text-white d-flex justify-content-center p-3'>
                <p className=''><FaCopyright></FaCopyright> 2023 Copyright. All right reserved.</p>
            </div>
        </div>
    );
};

export default Footer;