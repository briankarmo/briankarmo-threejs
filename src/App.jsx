import { BrowserRouter } from "react-router-dom";
import {  StarsCanvas } from "./components/canvas";
import Earth3D from "./components/Earth3D";

const App = () => {
  return (
    <BrowserRouter>
        <div className='relative z-0'>
          <Earth3D />
          <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
