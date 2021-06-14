import React, {useEffect } from 'react';
import { Link } from 'react-router-dom'
import chef1 from '../../../public/img/chef1.jpg';
import chef2 from '../../../public/img/chef2.jpg';
import chef3 from '../../../public/img/chef3.jpg';
import ehsan from '../../../public/img/ehsan.png';
import ipin from '../../../public/img/ipin.jpg';
import upin from '../../../public/img/upin.jpg';
import jarjit from '../../../public/img/jarjit.jpg';
import ismail from '../../../public/img/ismail.jpg';
import Owner from '../../../public/img/Owner.jpg';
import tokdalang from '../../../public/img/tokdalang.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })

    return(
        <div className="container">

            <h1 className="mt-4 mb-3">About</h1>

            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a><Link to={'/'}>Home</Link></a>
                </li>
                <li className="breadcrumb-item active">About</li>
            </ol>

            <div className="row" data-aos="fade-up" >
                <div className="col-lg-6">
                    <img className="img-fluid rounded mb-4" src={Owner} />
                </div>
                <div className="col-lg-6">
                    <h2>About Food Hunter (Owner)</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>
                </div>
            </div>

            <h2>Our Chef</h2>

            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="card h-100 text-center" data-aos="fade-right">
                    <img className="card-img-top" src={chef1} alt="" style={{maxHeight: "200px"}} />
                    <div className="card-body">
                        <h4 className="card-title">Gordon Ramsay</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#">name@example.com</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100 text-center" data-aos="fade-up">
                    <img className="card-img-top" src={chef2} alt="" style={{maxHeight: "200px"}} />
                    <div className="card-body">
                        <h4 className="card-title">Spongebob Squarepants</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#">name@example.com</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100 text-center" data-aos="fade-left">
                        <img className="card-img-top" src={chef3} alt="" style={{maxHeight: "200px"}} />
                        <div className="card-body">
                            <h4 className="card-title">Patrick Star</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#">name@example.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Our Customers</h2>
            <div className="row" data-aos="flip-up">
            <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src={ismail} alt="" style={{maxHeight: "150px"}}/>
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src={jarjit} alt="" style={{maxHeight: "150px"}}/>
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src={ipin} alt="" style={{maxHeight: "150px"}}/>
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src={ehsan} alt="" style={{maxHeight: "150px"}}/>
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src={upin} alt="" style={{maxHeight: "150px"}}/>
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src={tokdalang} alt="" style={{maxHeight: "150px"}}/>
            </div>
            </div>

    </div>
    )
};

export default About;
