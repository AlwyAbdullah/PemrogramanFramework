import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaGit} from 'react-icons/fa'

const Footer = () => {
    return (
            <footer className="bg-light text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: "#3b5998"}}
                            href="#!"
                            role="button"
                        ><FaFacebook /></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: "#55acee"}}
                            href="#!"
                            role="button"
                        ><FaTwitter /></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: "#dd4839"}}
                            href="#!"
                            role="button"
                        ><FaGoogle /></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: "#ac2bac"}}
                            href="#!"
                            role="button"
                        ><FaInstagram /></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: "#0082ca"}}
                            href="#!"
                            role="button"
                        ><FaLinkedin /></a>
                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: "#333333"}}
                            href="#!"
                            role="button"
                        ><FaGit /></a>
                    </section>
                </div>

                <div className="text-center p-3" style={{backgroundColor: "rgba(0,0,0,0.2)"}}>
                    <a className="text-white" href="#">Alwy Abdullah</a>
                </div>
            </footer>
    )
}

export default Footer;