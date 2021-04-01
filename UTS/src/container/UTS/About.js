import react from 'react';
import profile from '../../Profile.jpeg';

const About = () => {
    return(
        <div className="container mb-5">
            <div className="d-flex justify-content-center">
                <div className="card" style={{width: "20rem"}}>
                    <img className="card-img-top w-100" src={profile} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Alwy Abdullah</h5>
                        <h5 className="card-title">TI-3F (1841720024)</h5>
                        <p className="card-text">UTS Pemrograman Berbasis Framework</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;