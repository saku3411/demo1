import React from "react";
import Header from "../Components/Header/Header";
import './style.css'
import Footer from "../Components/Header/Footer/Footer";

const ContactPage = () => {
    return(
        <div className="content">
            <Header/>
            <div className="page-container">
            <h1 class="demo2">Contact Us</h1>

              <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            
               <h2>General Enquiries</h2>
               <hr></hr>
                  <h5>Vivekanand College Main Campus</h5>
                  <p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                  India</p>
               
                          <h2>Admissions Office</h2>
               
                        <p> <strong>Phone: +91 12345 67890</strong></p>
                        <p><strong>Email: info@vivekanandcollege.edu</strong></p>
                        <p> <strong>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</strong></p>
                
                            <h2>Student Support Services</h2>
                
                        <p> <strong>For current student support, academic advising, or general assistance:</strong></p>
                        <p><strong>Phone: +91 87654 32109</strong></p>
                        <p><strong>Email: studentsupport@vivekanandcollege.edu</strong></p>
                
                      <h2>Find Us on the Map</h2>
                      <hr></hr>
                        <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>

                          <a href="https://maps.google.com/?vivekanad+college"><u>View on Goole Mpas</u></a>
                  
                <h2>Send Us a Message</h2>

                <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
        <Footer/>
        </div>
        </div>
            )
        }
        export default ContactPage