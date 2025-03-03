import React from 'react'
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { ProfileCom } from '../ProfileCom/ProfileCom';
import { AboutMe } from '../AboutMe/AboutMe';
import { Skills } from '../Skills/Skills';
import { Projects } from '../Projects/Projects';
import { Home } from '../Home/Home';
// import { Footer } from '../Footer/Footer';

export const MainCmpo = () => {
  return (
<>
<Router>
  <Routes>
    <Route path='' element={<ProfileCom/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<AboutMe/>}/>
    <Route path='skills' element={<Skills/>}/>
    <Route path='project' element={<Projects/>}/>
    </Route>
  </Routes>
</Router>
<div>
 {/* <Footer/> */}
</div>

</>
  )
}
