import logo from './logo.svg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <div className="App">
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={1} factor={1.5} className="toplayer">
          <h1>Welcome to my website</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0} 
        // onClick={()=>ref.current.scrollTo(3)}
        >
          <h2>Web developement is fun! </h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
