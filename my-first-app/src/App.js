import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  let name = "Rohit"
  name = true
  return (
    <>
      <Navbar title = "Project 1" abouttext="About Us" />
      <TextForm heading="Uppercase Convertor"/>
    </>
  );
}

export default App;
