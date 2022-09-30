import './App.css';
import './NavBar.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
