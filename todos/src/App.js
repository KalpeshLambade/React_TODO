import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Component/Homepage";
import Navbar from "./Component/Global/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
