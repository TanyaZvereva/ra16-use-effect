import logo from './logo.svg';
import './App.css';
import UseEffect from './Components/Use-Effect'
import {DataReseve, LoadingReseve, ErrorReseve} from './Components/Use-JSON-Fetch'

function App() {
  return (
    <div className="App">
     <UseEffect/>
     <DataReseve/>
     <LoadingReseve/>
     <ErrorReseve/>
    </div>
  );
}

export default App;
