import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./main pages/Main";
import Error from "./main pages/Notfound";
import Intro from "./pages/Intro";
import Login from "./companents/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Intro />} />
        <Route path="/admin/info/pf23" element={<Admin />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
