import React from "react";
import {  Route,BrowserRouter as Router,Routes} from "react-router-dom";


import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import ContactPage from "./Pages/ContactPage";
import AddmissionPage from "./Pages/AddmissionPage";
  

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/aboutpage" element={<AboutPage/>}/>
        <Route path="/coursespage" element={<CoursesPage/>}/>
        <Route path="/contactpage" element={<ContactPage/>}/>
        <Route path="/addmission" element={<AddmissionPage/>}/>
      </Routes>
    </Router>
    
 )
}
export default App