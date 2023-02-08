import './App.css';
import './NavBar.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
// import Contador from './components/Contador';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <ItemListContainer />
      <ItemDetailContainer/>
    </div>
    
  );
}

export default App;
