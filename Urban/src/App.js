import logo from './logo.svg';
// import './App.css';
import Allroutes from "./Routes/AllRoutes"
import Navbar from "./Common/Navbar"
import Footer from "./Common/Footer"
function App() {
  return (
    <div className="App">
    <Navbar/>
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
