import React from "react";
//import TopBar from "../Components/TopBar";
import BottomBar from "../Components/BottomBar"

const Layout = (props) =>{
    return(
        <>
        <div >
        {/* <TopBar /> */}
        <BottomBar />
        </div>
        {props.children}
        </>
    );
}

export default Layout;