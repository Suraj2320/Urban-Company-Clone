// import logo from './logo.svg';
import './App.css';
import Navbar from './Common/Navbar';
import Allroutes from './Routes/AllRoutes';
// import Footer from "./Common/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
