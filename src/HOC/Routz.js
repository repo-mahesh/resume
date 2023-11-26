import React from "react";
import { Route, Routes } from "react-router-dom";

//importing components
// import Programming from "../Components/Resume/Programming";
// import Education from "../Components/Resume/Education";
// import Experience from "../Components/Resume/Experience";
// import Silverware from "../Components/Resume/Silverware";
// import Others from "../Components/Resume/Others";
import Home from "../Components/Home";
//import DictFeature from "../Features/dict/DictFeature";
import Resume from "../Components/Resume/Resume"
//import Breadcrumb from "./BreadCrumbs";
import { ProgData } from "../Components/Resume/ProgData";

const Routz = () =>{
    return(
        <>
        <div>
        {/* <Breadcrumb/>
        <DictFeature /> */}
        <Routes>
            <Route index element={<Home/>}/>
            {/* <Route exact path = "/home" element={<Home/>}/> */}
            <Route exact path = "/resume" element={<Resume contentData={ProgData}/>}/>
            <Route exact path = "/resume/programming" element={<Resume contentData={ProgData}/>}/>
            <Route exact path = "/resume/education" element={<Resume contentData={ProgData}/>}/>
            <Route exact path = "/resume/experience" element={<Resume contentData={ProgData}/>}/>
            <Route exact path = "/resume/silverware" element={<Resume contentData={ProgData}/>}/>
            <Route exact path = "/resume/others" element={<Resume contentData={ProgData}/>}/>
          </Routes>
          </div>
        </>
        
    )
}

export default Routz;