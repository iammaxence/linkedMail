import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './pages/home/Home';
import './styles/App.scss';

function render() {
  ReactDOM.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>,
    document.getElementById('root')
  );
}

render();