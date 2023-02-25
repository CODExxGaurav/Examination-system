import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/buttons";
import Physics from "./components/source";
import Question from "./components/question";
import Buttonmcq from "./components/Buttonmcq";
import Chemistry from "./components/chemistry";
import Maths from "./components/Math";
import {use, useEffect, useState} from "react";
import Buttons from "./components/buttonsnew";
import Buttonpop from "./components/buttonspop";
import Buttonprofile from "./components/buttonsprofile";
function App() {
   const [time,settime] = useState({
    hour : 3,
    min : 0,
    second : 0,
    time : 10800
   });
    useEffect(()=>{
    let mytime  = time.time;
    mytime--;
    let h = Math.floor(mytime/3600);
    let m = mytime - (h*3600);
    m=Math.floor(m/60);
    let s = Math.floor(mytime - (h*3600) - (m*60));
    const obj = setInterval(() => {
       settime(() => {
        return {
          hour : h,
          min : m,
          second : s ,
          time  : mytime
        };
       })
    },1000);
    return () => clearInterval(obj);
  });
  const [state,changestate] = useState(1);
  const [novisit,changenovisit] = useState(1);
  const [number,changenumber] = useState(1);
  const [main,changemain] = useState(Physics);
  const [butt ,changebutt] = useState(0);
  const [prop,change] = useState({
    key : main[0].key,
    id : main[0].id,
    instructions : main[0].instructions,
    question : main[0].question,
    img : main[0].img,
    option1 : main[0].option1,
    option2 : main[0].option2,
    option3 : main[0].option3,
    option4 : main[0].option4,
    style : main[0].style ,
    inputtag : main[0].inputtag
   });
   const [Physicsinput,changePhysicsinput] = useState(Physics.map((pro) => {return pro.inputtag;}));
   const [Chemistryinput,changeChemistryinput] = useState(Chemistry.map((pro) => {return pro.inputtag;}));
   const [Mathinput,changeMathinput] = useState(Maths.map((pro) => {return pro.inputtag;}));
   const [simpleinput,changesimpleinput] = useState(Physics.map((pro) => {return pro.inputtag;}));
   const [buttonPhysics,changebuttonPhysics] = useState(Physics.map((pr) => {
    return pr.style;
  }));
  const [buttonChemistry,changebuttonChemistry] = useState(Chemistry.map((pr) => {
    return pr.style;
  }));
  const [buttonMath,changebuttonMath] = useState(Maths.map((pr) => {
    return pr.style;
  }));
  const [buttonsimple,changebuttonsimple]=useState(Physics.map((pr) => {
    return pr.style;}));
   function radiochange(event,tagid) {
      const checked  = event.target.checked ;
      const value  = event.target.value ;
      const index = value.substring(6,7)-1;
      if(checked===true){
        simpleinput[butt][index]=true;
        let arr = buttonsimple ;
      arr[number-1] = "green";
      changebuttonsimple(arr);
      const t = butt ;
      changebutt(t);
      print(main[t]);
      changenumber(number);
      }
   }
   function review() {
    let arr = buttonsimple ;
    arr[number-1] = "#800080";
    changebuttonsimple(arr);
      const t = butt ;
      changebutt(t);
      print(main[t]);
      changenumber(number);
   }
   function grey() {
    let arr = buttonsimple ;
    arr[number-1] = "grey";
    changebuttonsimple(arr);
    const t = butt ;
    changebutt(t);
    print(main[t]);
    changenumber(number);
  }
   function prev() {
    console.log(prop.inputtag);
      if(butt>0){
        const t = butt ;
        changebutt(t-1);
        changenumber(number-1);
        print(main[t-1]);
      }
   }
   function next() {
    if(butt<main.length-1){
      const t = butt ;
      changebutt(t+1);
      print(main[t+1]);
      changenumber(number+1);
    }
 }
  function buttonchange(check) {
    if(check===1){
      changebuttonPhysics(buttonsimple);
      changePhysicsinput(simpleinput);
    }
    else if(check===2){
      changebuttonChemistry(buttonsimple);
      changeChemistryinput(simpleinput);
    }
    else {
      changebuttonMath(buttonsimple);
      changeMathinput(simpleinput);
    }
  } 
   function mainchangeit(pr){
     buttonchange(state);
     changestate(pr);
     if(pr===1){

      changebuttonsimple(buttonPhysics);
      changesimpleinput(Physicsinput);
       changemain(Physics);
       change(Physics[0]);
       changenumber(1);
       changebutt(0);
     }
     else if(pr===2){
      changebuttonsimple(buttonChemistry);
      changesimpleinput(Chemistryinput);
      changemain(Chemistry);
      change(Chemistry[0]);
      changenumber(1);
      changebutt(0);
     }
     else {
      changebuttonsimple(buttonMath);
      changesimpleinput(Mathinput);
      changemain(Maths);
      change(Maths[0]);
      changenumber(1);
      changebutt(0);
     }
   }
  function fun(it){
      changenumber(it+1);
      changebutt(it);
      print(main[it]);
  }
  function print(prop){
    const obj = prop ;
    change(()=> {
      return {
        id : obj.id,
        question : obj.question,
        instructions : obj.instructions,
        img  : obj.img,
        option1 : obj.option1,
        option2 : obj.option2,
        option3 : obj.option3,
        option4 : obj.option4,
        style : obj.style,
        inputtag : obj.inputtag
      }
    });
  }
  function uncheckit() {
  const boolit = prop.inputtag.map(() =>  false);
  simpleinput[butt]=boolit;
   let arr = buttonsimple ;
   arr[number-1] = "white";
   changebuttonsimple(arr);
   prop.inputtag.map(() => {
    return false ;
   })
   const t = butt ;
   changebutt(t);
   print(main[t]);
   changenumber(number);
  }
  return (
    <div className="parent">
      <Header></Header>
      <div className="container">
      <div className="left">
        <Button name="All Sections" id={1} fun = {mainchangeit}></Button>
        <Button name="PHYSICS" id={1} fun = {mainchangeit}></Button>
        <Button name="CHEMISTRY" id={2}  fun = {mainchangeit}></Button>
        <Button name="MATHS" id={3} fun = {mainchangeit}></Button>
        <hr></hr>
        <div className="content">
            <div className="question">
                <p>Q NO: {number}</p>
                <p>View in : <select><option>English</option><option>Hindi</option></select></p>
            </div>
            <div className="screen">
                <div className="description">
                    <p>QUESTION INSTRUCTION</p>
                    <div><p style={{color : "black" , width : "90%" , margin : "auto", padding : "5px"}}>{prop.instructions}</p></div>
                </div>
                <div className="answer">
                    <p style={{marginBottom:"10px"}}>QUESTION</p>
                    <Question question = {prop.question} key = {prop.key} id = {prop.id} input1 = {simpleinput[butt]}
                    option1 = {prop.option1} option2 = {prop.option2}
                    option3 = {prop.option3} option4 = {prop.option4} img  = {prop.img} fun2 = {radiochange} backgroundColor = {buttonsimple[number-1]} ></Question>
                </div>
            </div>
        </div>
        <footer>
            <Buttons name="CLEAR RESPONSE" fun = {uncheckit}></Buttons>
            <Buttons name="REVIEW" fun ={review}></Buttons>
            <Buttons name="DUMP" fun = {grey}></Buttons>
            <Buttons name="PREVIOUS" fun={prev}></Buttons>
            <Buttons name="NEXT" fun={next}></Buttons>
        </footer>
    </div>
    <div className="right">
         <div className="profile">
            <img  className = "image" src="https://www.shutterstock.com/image-vector/passport-size-photo-business-man-260nw-2070414434.jpg" 
              style={{width:"100px", height:"100px"}}></img>
            <div ><p>Time Left : {time.hour} : {time.min} : {time.second}</p>
            <p>Name : Naveen</p>
            <p>Age : 20 years</p></div>
         </div>
         <div className="Questionpalate">
              <p className="pallet">Question Pallete</p>
               {main.map((prop,index) => {
                  return  <Buttonmcq name={index+1} fun={fun} fun2={radiochange} backgroundColor = {buttonsimple[index]}></Buttonmcq>
               })}
              </div>
              <div className="legend">
              <p className="pallet">Legend (Click to View)</p>
              <Buttonpop name="4 Answer" st="124px" margin="0.4px" marginBottom="2px" backgroundColor = "green"></Buttonpop>
              <Buttonpop name="2 Not Answer" st="124px" margin="0.4px" marginBottom="2px" backgroundColor="red"></Buttonpop>
              <Buttonpop name="1 Review+Answer" st="124px" margin="0.4px" marginBottom="2px" backgroundColor = "#800080"></Buttonpop>
              <Buttonpop name="1 Review-Answer" st="124px" margin="0.4px" marginBottom="2px" backgroundColor="yellow"></Buttonpop>
              <Buttonpop name="1 Dump" st="124px" margin="0.4px" marginBottom="2px" backgroundColor="grey"></Buttonpop>
              <Buttonpop name="No Visit" value = {novisit} st="124px" margin="0.4px" marginBottom="2px" backgroundColor="white"></Buttonpop>
              <p className="allquestions">10 All Questions</p>
              <hr style={{border:"1px solid white",marginBottom:"10px"}}></hr>
              <Buttonprofile name="Profile" link = "/"st="105px"  marginLeft="10px" marginRight="10px" marginBottom="4px" backgroundColor="blue" color="white"></Buttonprofile>
              <Buttonprofile name="Instr" link = "/"st="105px" marginLeft="10px" marginRight="10px" marginBottom="4px" backgroundColor="blue" color="white"></Buttonprofile>
              <Buttonprofile name="Questions" link = "/" st="105px" marginLeft="10px" marginRight="10px" marginBottom="4px" backgroundColor="blue" color="white"></Buttonprofile>
              <Buttonprofile name="Submit" link = "/"  st="105px" marginLeft="10px" marginRight="10px" marginBottom="4px" backgroundColor="blue" color="white"></Buttonprofile>
         </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  ); 
}
export default App;