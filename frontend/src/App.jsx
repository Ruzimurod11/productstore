import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

export const backend_url = import.meta.env.VITE_BACKEND_URL;
console.log(backend_url);

function App() {
   return (
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
         </Routes>
      </Box>
   );
}

export default App;
