
import './App.css';

import { Counter } from './Counter/Counter'
function App() {

  return (
    <>
      <Counter init={10}/>
      <Counter init={100} />
    </>
  )
}

export default App;
