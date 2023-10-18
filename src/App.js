import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CompanyList from './CompanyList';
import FuncList from './FuncList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <h1 className="clinic-name">Nome da Clínica</h1>
          <nav>
            <ul className="navigation">
              <li className="navigation-item"><Link to="/">Empresas</Link></li>
              <li className="navigation-item"><Link to="/FuncList">Funcionários</Link></li>
              <li className="navigation-item"><a href="#">Exames</a></li>
            </ul>
          </nav>
        </header>
       <Routes>
          <Route path="/" element={<CompanyList />} />
          <Route path="/FuncList" element={<FuncList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

