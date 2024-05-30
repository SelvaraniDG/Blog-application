import React from 'react';
import './App.css';
import Homepage from './components/home/Homepage';
import Header from './components/header/Header';
import Footer from './components/home/Footer';
import { Routes, Route } from 'react-router-dom';
import BlogList from './components/blogs/BlogList';
import Auth from './components/auth/Auth';
import Signup from './components/auth/Signup';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/blogs' element={<BlogList />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
