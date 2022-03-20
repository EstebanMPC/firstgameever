import './App.css';
import Home from "./components/LandingPage";
import Jumbotron from './components/jumbotron';
import GameComponent from './components/gamecomponent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Jumbotron />
      <GameComponent />
    </div>
  );
}

export default App;
