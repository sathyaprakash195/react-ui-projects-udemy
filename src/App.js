import "./App.css";
import Home from "./Projects/Home/index";
import Rotated from "./Projects/Rotated/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Glowing from "./Projects/Glowing";
import Marketing from "./Projects/Marketing";
import Colors from "./Projects/Colors";
import ParallaxEffect from "./Projects/Parallax";
import Coffieshop from "./Projects/Coffieshop";
import Cars from "./Projects/Cars";
// ..
AOS.init({
  duration: 1000,
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rotated" exact element={<Rotated />} />
          <Route path="/glowing" exact element={<Glowing />} />
          <Route path="/marketing" exact element={<Marketing />} />
          <Route path="/colors" exact element={<Colors />} />
          <Route path="/parallax" exact element={<ParallaxEffect />} />
          <Route path="/coffieshop" exact element={<Coffieshop />} />
          <Route path="/cars" exact element={<Cars />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
