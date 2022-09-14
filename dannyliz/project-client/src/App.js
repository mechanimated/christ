import Header from "./components/Header"
import ProductList from "./components/ProductList"
import UploadRoutine from "./components/UploadRoutine"
import{Link, Route, Routes} from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
   <Router>
    <div className="App">
          <Header />
    <Routes>
      <Route path="*" element={<ProductList/>}/>
      <Route path="/upload" element={<UploadRoutine/>}/>
    </Routes>
    </div>
  </Router>
  );
}

export default App;