import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
function App() {
  const name = "Brad";
  const x = true;

  return (
    <div className="container">
      <Header />
      <h1 style = {headingStyle}> Hello {name}</h1>     
      <h1> Hello {x ? "Man" : "Woman"}</h1>     
    </div>
  );
}

export default App;

const headingStyle = {
  color : "red",
  backgroundColor : "black"
}
