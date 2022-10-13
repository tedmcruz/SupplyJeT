import './App.css';
import './NavBar.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/Contador';
import Productos from './components/Productos'

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <ItemListContainer />
      <Contador/>
    </div>
    
  );
}

export default App;
