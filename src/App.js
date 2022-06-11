import './App.css';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="App-body">
        <p className="trash-title">
          TRASH RAT
        </p>
      </div>
    </div>
  );
}

export default App;
