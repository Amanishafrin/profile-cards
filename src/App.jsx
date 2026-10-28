import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
