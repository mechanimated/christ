import Header from "./components/Header"
import Home from "./components/Home"
import ProductPage from "./components/ProductPage"
import{Link, Route, Routes} from 'react-router-dom'
import RoutinePage from "./components/RoutinePage"
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
   <Router>
    <div className="App"
    style={{ 
      backgroundImage: 'url(https://img.freepik.com/free-photo/skin-care-cosmetology-products_658428-374.jpg?w=2000)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
      width: '100%',
      height: '100vh',
  }}>
    <div style={{
      backgroundImage: 'url(https://www.jctropicals.us/wp-content/uploads/2021/02/jc-tropical-aloe-vera-leaf.png)',
      minHeight: '900px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '400px',
      backgroundAttachment: 'scroll',
    }}>
          <Header />
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/upload" element={<ProductPage/>}/>
      <Route path="/viewroutines" element={<RoutinePage/>}/>
    </Routes>
    </div>
    </div>
  </Router>
  );
}

export default App;