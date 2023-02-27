import './App.css';
import Navigation from './navigation/Navigation';
import Homepage from '../src/sections/main/Homepage';
import { ContextStore } from './utils/context';

function App() {
  return (
    <>
      <ContextStore>
        <Navigation />
        <Homepage />
      </ContextStore>
    </>
  );
}

export default App;
