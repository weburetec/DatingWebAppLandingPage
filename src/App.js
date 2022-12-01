import "./App.css";
import subject from "./constants/images/subject.png";
import imgShadow from "./constants/images/imgShadow.png";
import solidcurve from "./constants/images/solidcurve.png";
import fadedcurve from "./constants/images/fadedcurve.png";
import { makeStyles } from "@material-ui/core";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import TabsWrappedLabel from "./components/NavBar";

const useStyles = makeStyles({
  content: {
  display:"flex",
  flexDirection:"row"
  },
  navbar:{
    minWidth:"90vw",
  }
});


function App() {
  const classes = useStyles();
  console.log(classes);
  return (
    <div className="App">
      <img className="subject" src={subject} alt="subject" />
     
      <img className="imgShadow" src={imgShadow} alt="subject" />

     {/* <img className="solidCurve0" src={solidcurve} alt="solidCurve0" />
      <img className="solidCurve1" src={solidcurve} alt="solidCurve1" />
      <img className="solidCurve2" src={solidcurve} alt="solidCurve2" />
      <img className="solidCurve3" src={solidcurve} alt="solidCurve3" />
  <img className="solidCurve4" src={solidcurve} alt="solidCurve4" /> */}

   { /*  <img className="fadedCurve0" src={fadedcurve} alt="fadedCurve0" />
      <img className="fadedCurve1" src={fadedcurve} alt="fadedCurve0" />
      <img className="fadedCurve2" src={fadedcurve} alt="fadedCurve2" />
      <img className="fadedCurve3" src={fadedcurve} alt="fadedCurve3" />
      <img className="fadedCurve4" src={fadedcurve} alt="fadedCurve4" />
      <img className="fadedCurve4" src={fadedcurve} alt="fadedCurve4" />
    */
    }





    
   
      <div className={classes.navbar}>
      <TabsWrappedLabel/>
      </div>
    

      
      
      <div>
        
      </div>
    </div>
  );
}

export default App;
