import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import GitHubUser from './components/GitHubUser';

function App() {
  let name = "Rohit"
  name = true
  return (
    <>
      <GitHubUser login = "rohitgarg025"/>
      <Navbar title = "Project 1" abouttext="About Us" />
      <TextForm heading="Uppercase Convertor"/>
    </>
  );
}

export default App;
