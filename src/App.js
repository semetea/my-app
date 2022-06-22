import { Link, Navigate, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import NotFound from './NotFound';
import UserForm from './UserForm';

function App() {
  return (
    <>
      <h2>React Routing &amp; Forms</h2>
      <Link to="/userForm">User Form</Link> | <Link to="/about">About</Link>
      <hr />
      <br />
      <Routes>
        <Route path='/' element={<Navigate to="/userForm" />} />
        <Route path='/userForm' element={<UserForm />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
