import React from "react";
const Buttonprofile = (prop) => {
    return (<button className="buttonmcq"  id ={`buttons${prop.name}`}  
    style={{color : prop.color ,backgroundColor : prop.backgroundColor,width : prop.st,margin: prop.margin,marginBottom:prop.marginBottom,marginLeft:prop.marginLeft,marginRight:prop.marginRight}}><a  to = {prop.link}className="anchor" style={{textDecoration : "none" , color : "white"}}>{prop.name}</a></button>);
 }
 export default Buttonprofile;