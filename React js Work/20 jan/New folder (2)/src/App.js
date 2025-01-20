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
      <Box sx={{ margin: "20px" }}>
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "1px solid orange",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                borderRadius: "0.5rem",
              },
              "&:hover fieldset": {
                borderColor: "green",
              },
              "&.Mui-focused fieldset": {
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
              color: '#A0AAB4',
            },
          }}
        />
      </Box>
      <Customtext />
    </>
  );
}

export default App;
