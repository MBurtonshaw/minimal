import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './Components/Main';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        {/* Redirect to Grocery */}
        <Route
          path="/"
          element={ <Main /> } 
          />
      </Routes>
    </BrowserRouter>
  );
}
