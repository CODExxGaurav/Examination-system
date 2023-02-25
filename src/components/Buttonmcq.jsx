import React from "react";
const Buttonmcq = (prop) => {
   return (<button className="buttonmcq"  id ={`buttons${prop.name}`} onClick = {()=> {
      prop.fun(prop.name-1);
   }}style={{color : prop.color,backgroundColor : prop.backgroundColor,width : prop.st,margin: prop.margin,marginBottom:prop.marginBottom,marginLeft:prop.marginLeft,marginRight:prop.marginRight}}>{prop.name}</button>);
}
export default Buttonmcq;