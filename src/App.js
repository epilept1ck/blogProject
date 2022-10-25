import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Tourism from './Front-end Components/Tourism';
import Front from './Front-end Components/Front';
import { MainPAge } from './Front-end Components/MainPAge';
import Technology from './Front-end Components/Technology';
import Fitness from './Front-end Components/Fitness';
import Food from './Front-end Components/Food';
import { Home } from './Front-end Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Front/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/category' element={<Tourism/>}/>
        <Route path='/:category/:id' element={<MainPAge/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
