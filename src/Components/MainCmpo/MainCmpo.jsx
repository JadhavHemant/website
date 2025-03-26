import React from 'react'
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { ProfileCom } from '../ProfileCom/ProfileCom';
import { AboutMe } from '../AboutMe/AboutMe';
import { Skills } from '../Skills/Skills';
import { Home } from '../Home/Home';
import ContactMe from '../ContactMe/ContactMe';
// import { Footer } from '../Footer/Footer';

export const MainCmpo = () => {
  return (
<>
<Router>
  <Routes>
    <Route path='' element={<ProfileCom/>}>
    <Route path='' element={<Home/>}/>
    <Route path='Aboutus' element={<AboutMe/>}/>
    <Route path='Product' element={<Skills/>}/>
    <Route path='Contactus' element={<ContactMe/>}/>
    </Route>
  </Routes>
</Router>
<div>
 {/* <Footer/> */}
</div>

</>
  )
}
