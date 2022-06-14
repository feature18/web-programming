import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Asteroids} from './Pages/Asteroid';
import {Destroy} from './Pages/Destroy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Asteroids />}/>
                <Route path="/destroy" element={<Destroy />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();

