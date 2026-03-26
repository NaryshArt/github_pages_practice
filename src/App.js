import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world!</p>
      </header>
    </div>
  );
}

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Это страница "Что-то"</p>
      </header>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Главная</Link>
        {' | '}
        <Link to="/about">Что-то</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;