import React from "react";
const IMage = (prop) => {
    function fun(prop) {
        if(prop){
            if(prop.name === '/'){
                return null ;
            }
            return  <p style={{ width : "50%",margin : "auto" }}><img src={"/"+prop.name} style ={{  width : "200px" , height : "200px",margin : "auto"}}></img></p>
        }
    }
 return (
    <>
     {fun(prop)}
    </>);
}
export default IMage ;