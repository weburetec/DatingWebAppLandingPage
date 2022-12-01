import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import mainLogo from "../constants/images/mainLogo.png"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },

  mainContent: {
    marginTop: "2vw",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row !important",
    minHeight: "99%",
  },
  tabs:{
    
    "& .MuiTabs-indicator": {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"0.9vh",
    maxWidth:"0.9vh",
    backgroundColor: "#ED9B59",
    borderRadius:"50%",
    marginLeft:"9.5%"
  },
  "& .Mui-selected":{
    color:"#ED9B59",
    fontWeight:"bold"
  }},
 
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"#00000000",color:"#7D8790" , fontWeight:"bold !important",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} elevation={0}>
      <img src ={mainLogo} alt="main logo" style={{paddingLeft:"1vw"}}/> 
      
      <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          className={classes.tabs}
        >
          <Tab
            value="one"
            label="Home"
            wrapped
            {...a11yProps("one")}
            disableRipple
          />
          <Tab value="two" label="Members" {...a11yProps("two")}  disableRipple/>
          <Tab value="three" label="Blogs" {...a11yProps("three")}  disableRipple/>
          <Tab value="four" label="Privacy" {...a11yProps("four")}  disableRipple/>
          <Tab value="five" label="Contact" {...a11yProps("five")}  disableRipple/>
        </Tabs>


        <div>
       <button style={{color:"#7D8790" ,backgroundColor:"#00000000", fontSize:"2vh",fontWeight:"bold",border:"none",borderRadius:"1vh",minHeight:"4vh",minWidth:"6vw"}}>Log in</button> <button style={{backgroundColor:"#ED9B59" ,color:"white", fontSize:"2vh",fontWeight:"bold",border:"none",borderRadius:"3vh",minHeight:"4vh",minWidth:"6vw",marginLeft:"1vw",marginRight:"1vw"}}>Register</button>
        </div>
      </AppBar>
      <TabPanel value={value} index="one">
        <div className={classes.mainContent}>
          <LeftSection />
          <RightSection />
        </div>
      </TabPanel>
      <TabPanel value={value} index="two">
        Item Two
      </TabPanel>
      <TabPanel value={value} index="three">
        Item Three
      </TabPanel>
    </div>
  );
}
