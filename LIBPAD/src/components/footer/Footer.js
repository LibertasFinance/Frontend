import React from 'react'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import './FooterStyles.css'

import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <SiDatabricks className='icon' />
                        <h2>LIB PAD.</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>ICO Launch pad</p>
                        <p>Staking and Farming</p>
                        <p>Claims</p>
                    </div>
                    <div className="col">
                        <h3>My Account</h3>
                        <p>EXTRA</p>
                        <p>EXTRAEXTRA</p>
                        <p>EXTRA</p>
                        <p>EXTRA</p>
                    </div>
                    <div className="col">
                        <h3>Information</h3>
                        <p>Twitter</p>
                        <p>Discord</p>
                        <p>Telegram</p>
                        <p>Whitepaper</p>
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <p>LibertasDao © 2022</p>
                        <p>All Rights Reserved</p>
                        <p>Contact</p>
                    </div>
                    <form>
                        <div className="social-group">
                            <FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <FiLinkedin className='social-icon' />
                            <FiDribbble className='social-icon' />
                            <FiGithub className='social-icon' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
