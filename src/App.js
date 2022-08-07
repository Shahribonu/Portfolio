import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
