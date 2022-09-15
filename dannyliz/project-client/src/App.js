import Header from "./components/Header"
import ProductList from "./components/ProductList"
import UploadRoutine from "./components/UploadRoutine"
import{Link, Route, Routes} from 'react-router-dom'


import {BrowserRouter as Router} from 'react-router-dom'
import { minHeight } from "@mui/system"
function App() {
  return (
   <Router>
    <div className="App"
    style={{ 
      backgroundImage: 'url(https://img.freepik.com/free-photo/skin-care-cosmetology-products_658428-374.jpg?w=2000)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
  }}>
    <div style={{
      backgroundImage: 'url(https://www.jctropicals.us/wp-content/uploads/2021/02/jc-tropical-aloe-vera-leaf.png)',
      minHeight: '900px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '400px',
      backgroundPosition: '0% 0%',
    }}>
          <Header />
    <Routes>
      <Route path="*" element={<ProductList/>}/>
      <Route path="/upload" element={<UploadRoutine/>}/>
    </Routes>
    </div>
    </div>
  </Router>
  );
}

export default App;