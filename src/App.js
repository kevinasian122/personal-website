

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Foodmark from './Components/Foodmark'

function App() {
  return (
    <div className="App">
      <Home />
      <div class = "body">
        <Navbar />
        <Foodmark />
      </div>
      
      
    </div>
  );
}

export default App;
