// routes.js
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetails from './ProjectDetails' // <-- Import this if you have it
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserManagement from './pages/UserManagement'
import BlogManagement from './pages/BlogManagement'
import ProjectManagement from './pages/ProjectManagement'

function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/:projectTitle' element={<ProjectDetails />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/:blogId' element={<BlogDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='user-management' element={<UserManagement />} />
        <Route path='blog-management' element={<BlogManagement />} />
        <Route path='project-management' element={<ProjectManagement />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
