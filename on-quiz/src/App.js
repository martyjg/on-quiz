import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { createRenderer } from 'fela'
import { RendererProvider } from 'react-fela'

import Home from './components/Home'
import Quiz from './components/Quiz'

const renderer = createRenderer()

function App() {
  return (
    <RendererProvider renderer={renderer}>
      <Router>
        <header>
          <nav>
            <Link to="/" className='logo'>
              ON
            </Link>
          </nav>
        </header>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </RendererProvider>
  );
}

export default App;
