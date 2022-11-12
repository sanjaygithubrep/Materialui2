import React from "react";
 import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, Container,Stack } from "@mui/material";

function App() {
  return (
    <Box>
       <Navbar /> 
      <Stack direction="row" spacing={2} justifyContent="center">
        
        <Sidebar />
        <Feed />
        
        <Rightbar />
        {/* <Sidebar /> */}
      </Stack>
    </Box>
  );
}

export default App;
