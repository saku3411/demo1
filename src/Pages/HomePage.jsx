import React from "react";
import Header from "../Components/Header/Header";
import './style.css'
import Footer from "../Components/Header/Footer/Footer";

const HomePage = () => {
    return(

        <div className="content">
            <Header/>
                <div className="page-container">
                    <div className="college-image">
                        <img src="./images/vck symbol.png" alt="VCK" className = "college-image" width="100%" height="300px"></img>
                   
                        <div className="front-image">

                        <h1><b>welcome to vivekanand college</b></h1>
                        <p><b>Your journey to excellence starts here.</b></p>
                        <a href="addmission" id="main1"><u>Apply Now!</u></a>
                    </div>
                </div>
                <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                <h2>Why Choose Vivekanand College?</h2>
                <ul>
                    <li>Legacy of Excellence: Decades of commitment to quality education.</li>
                    <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
                    <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
                    <li>Strong Placements: Excellent career opportunities with leading companies.</li>
                
                </ul>
                <h2>Campus Life & Facilities</h2>
                <div>
                    <img src="./images/vck.jpeg"  width="40%" height="200px"></img>
                    <img src="./images/campus.jpeg" width="40%" height="200px" ></img>
                </div>
            
                <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                <div className="wo">
                <p>Ready to explore our courses</p>
                <a className="btn" href="./coursespage"> explore courses?</a>
                </div>
                </div>
            <Footer/>
        </div>



    )
}
export default HomePage