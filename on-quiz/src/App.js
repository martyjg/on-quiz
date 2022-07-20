import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import Quiz from './components/Quiz'

function App() {
  return (
    <Router>
      <header>
        <nav>
          <span className='burger'>—</span>
          <Link to="/">
            <span className='logo'>ON</span>
          </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
