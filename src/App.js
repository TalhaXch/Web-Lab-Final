import logo from './logo.svg';
import './App.css';
import RocketPage from './Components/Rocket';
import NavBar from './Components/Header';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <NavBar/>
      </Provider>
    </div>
  );
}

export default App;
