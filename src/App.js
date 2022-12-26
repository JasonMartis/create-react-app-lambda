import Home from "./components/Home";
// import Login from "./components/Login";
// import List from "./components/List";
// import Single from "./components/Single";
// import NewStudent from "./components/NewStudent";
import Evelyn from "./students/Evelyn";
import Aranka from "./students/Aranka";
import Floris from "./students/Floris";
import Hector from "./students/Hector";
import Martina from "./students/Martina";
import Maurits from "./students/Maurits";
import Rahima from "./students/Rahima";
import Sandra from "./students/Sandra";
import Wietske from "./students/Wietske";
import Storm from "./students/Storm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css";
// import New from "./components/NewStudent";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/students/Evelyn" element={<Evelyn />} />
            <Route path="/students/Aranka" element={<Aranka />} />
            <Route path="/students/Floris" element={<Floris />} />
            <Route path="/students/Hector" element={<Hector />} />
            <Route path="/students/Martina" element={<Martina />} />
            <Route path="/students/Maurits" element={<Maurits />} />
            <Route path="/students/Rahima" element={<Rahima />} />
            <Route path="/students/Sandra" element={<Sandra />} />
            <Route path="/students/Wietske" element={<Wietske />} />
            <Route path="/students/Storm" element={<Storm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
