import './App.css';
import Counter from './Counter';
import {useSelector} from "react-redux"
function App() {
  const {count} = useSelector((store)=>store.counter)
  return (
    <div className="App">
      {
      }
      <Counter/>
      </div>
  );
}

export default App;
