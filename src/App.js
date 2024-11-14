import logo from './logo.svg';
import './App.css';
import useStateHook from './useState-Page/useStateHook';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import useEffectHook from './useEffect-Page/useEffectHook';
import useRefHook from './useRef-Page/useRefHook';

const Principal = () => {
  <Routes>
    <Route path='/' element={<useStateHook />} />
    <Route path='/useEffect' element={<useEffectHook />} />
    <Route path='useRef' element={<useRefHook />} />
  </Routes>
}

function App() {
  return (
    <Router>
      <Principal />
    </Router>
  );
}

export default App;
