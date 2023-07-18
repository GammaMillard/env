import logo from './logo.svg';
import './App.css';

function App() {
  const x = process.env.REACT_APP_API_URL
  return (
    <div className="App">
    {x || 'hola'}
    </div>
  );
}

export default App;
