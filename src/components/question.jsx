import React from "react";
import IMage from "./image";
const Question = (prop) => { 
    return (
        <div><p style={{color:"black",margin: "auto",width:"90%"}}>{prop.question}</p>
        <IMage name = {prop.img}></IMage>
        <form>
            <div className="option"><input type="radio"  checked = {prop.input1[0]} name="option" class="radio" value={"option1"+prop.option1} onChange={(event)=> {
                 prop.fun2(event,prop.id);
        }}/>
        <label for="html">&nbsp; &nbsp;(A) &nbsp; &nbsp;  {prop.option1}</label></div>
        <div className="option"><input type="radio"   checked = {prop.input1[1]}  onChange={(event)=> {
                 prop.fun2(event,prop.id);
        }} name="option" class="radio" value={"option2"+prop.option2} />
        <label for="html">&nbsp; &nbsp;(B) &nbsp; &nbsp; {prop.option2}</label></div>
        <div className="option"> <input type="radio"   checked = {prop.input1[2]} name="option"  class="radio" value={"option3" + prop.option3} onChange={(event)=> {
                 prop.fun2(event,prop.id);
        }}/>
        <label for="html">&nbsp; &nbsp;(C) &nbsp; &nbsp; {prop.option3}</label></div>
        <div className="option"><input type="radio" checked = {prop.input1[3]}  name="option" class="radio" value={"option4" +prop.option4} onChange={(event)=> {
                 prop.fun2(event,prop.id);
        }} />
        <label for="html">&nbsp; &nbsp;(D) &nbsp; &nbsp; {prop.option4}</label></div>
        </form>
        </div>
    );
}
export default Question ;