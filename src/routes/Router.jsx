//import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../pages/Main';
import LoginPage from '../pages/Login/Login';
import RegisterPage from '../pages/Register';
import BooksPage from '../pages/Books/Books';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/books" element={<BooksPage />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
