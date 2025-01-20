// import logo from './logo.svg';
// import './App.css';
// import Contactus from './components/Contactus';
// import ComA from './components/ComA';

// function App() {
//   return (
//     <div className="App">
//       <h2>Hello react js</h2>
//       {/* <Contactus /> */}
//       <ComA/>
//     </div>
//   );
// }

// export default App;

import logo from "./logo.svg";
import "./App.css";
import { Stack, TextField, Box } from "@mui/material";
import Customtext from "./components/Customtext";

function App() {
  return (
    <>
      <Stack sx={{ margin: "20px" }}>

        <Customtext text="User Name" sx={{color:"red"}} />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "1px solid black",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                borderRadius: "0.5rem",
              },
              "&:hover fieldset": {
                borderColor: "green",
              },
              "& .Mui-focused fieldset": {
                borderColor: "purple",
              },

              "input::placeholder": {
                fontSize: "1rem",
                color: "#667085",
                opacity: "1",
                color: "red"
              },

            },
            '& label.Mui-focused': {
              color: 'purple',
            },
          }}
        />


        <Customtext text="Password" />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "1px solid black",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                borderRadius: "0.5rem",
              },
              "&:hover fieldset": {
                borderColor: "green",
              },
              "& .Mui-focused fieldset": {
                borderColor: "purple",
              },

              "input::placeholder": {
                fontSize: "1rem",
                color: "#667085",
                opacity: "1",
                color: "red"
              },

            },
            '& label.Mui-focused': {
              color: 'purple',
            },
          }}
        />


      </Stack>
    </>
  );
}

export default App;
