import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Submenu from "./components/submenu/Submenu";


function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <Submenu/>
    </div>
  );
}

export default App;
