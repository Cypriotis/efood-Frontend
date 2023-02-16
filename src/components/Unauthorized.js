import React from "react";
import { redirect } from "react-router";
import Header from "/home/tofi-machine/Documents/ReactFrontEnd/efoodfrontend/src/components/Header/header.js";





class Unauthorized extends React.Component{

     LandingFrame() {
        const style = {
            "backgroundImage": `url("images/background.png")`,
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "cover",
            position: "absolute",
            height: "100%",
            width: "100%",
            scale: "80%",
        }
        return <div style={style}></div>
    }

    render() {
            return (
                <div>
                   unauthorized
                </div>
            )
    }
    


}


export default Unauthorized