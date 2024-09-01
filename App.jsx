import React from 'react';
import { RecipeProvider } from './context/RecipeContext';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Form from './pages/form';
import Detail from './pages/detail';
import Login from './pages/login';
import Register from './pages/register';
import Navbar from './components/navbar';

function App() {
  
  return (
    <AuthProvider>
      <RecipeProvider>
        <Router>
          <Navbar/>
          <div style={{ marginTop: '64px' }}>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/detalle" element={<Detail/>}/>
              <Route path="/inicio-sesion" element={<Login/>}/>
              <Route path="/registrarse" element={<Register/>}/>
            </Routes>
          </div>
        </Router>
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;
