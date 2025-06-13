import React, { useState } from "react";
import {  Route,BrowserRouter as Router,Routes} from "react-router-dom";


import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import ContactPage from "./Pages/ContactPage";
import AddmissionPage from "./Pages/AddmissionPage";
import ChatbotComponent from "./Components/Chatbot/ChatbotComponents";
import DeveloperInfoPopup from "./Components/DeveloperInfo/DeveloperInfoPopup";
  

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sakshi Sarjerao Patil"
          studentPhotoUrl="/images/sakshii.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>


    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutpage" element={<AboutPage/>}/>
        <Route path="/coursespage" element={<CoursesPage/>}/>
        <Route path="/contactpage" element={<ContactPage/>}/>
        <Route path="/addmission" element={<AddmissionPage/>}/>
      </Routes>
      <ChatbotComponent/>
    </Router>
    </>
    
 )
}
export default App