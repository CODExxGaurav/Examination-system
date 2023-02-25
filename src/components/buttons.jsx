import React from "react";
const Button = (props) => {
    return (
        <button className="btn" onClick={() => {
         props.fun(props.id);
        }}>{props.name}</button>
    );
}
export default Button;