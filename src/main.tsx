import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './index.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage.tsx'
import UsersPage from './pages/UsersPage.tsx'
import TodosPage from './pages/TodosPage.tsx'
import UserDefaultPage from './pages/userDetaislsPage.tsx'
import TaskPage from './pages/TaskPage.tsx'

export interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <header>
    <Link to='/'>Go Home</Link>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id/todos" element={<TodosPage />} />
      <Route path="/users/:id" element={<UserDefaultPage />} />
      <Route path="/users/:id/todos/:taskID" element={<TaskPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
