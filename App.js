import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import ForgotPassword from './pages/Forgotpassword';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import BlogList from './pages/BlogList';
import BlogcatList from './pages/BlogcatList';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Colorlist from './pages/Colorlist';
import Categorylist from './pages/Categorylist';
import Brandlist from './pages/Brandlist';
import Productlist from './pages/Productlist';
import Addblog from './pages/Addblog';
import Addblogcat from './pages/Addblogcat';
import Addcolor from './pages/Addcolor';
import Addcat from './pages/Addcat';
import Addbrand from './pages/Addbrand';
import Addproduct from './pages/Addproduct';

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/reset-password' element={<Resetpassword/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/admin' element={<MainLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='enquiries' element={<Enquiries/>}/>
        <Route path='blog-list' element={<BlogList/>}/>
        <Route path='blog' element={<Addblog/>}/>
        <Route path='blog-category-list' element={<BlogcatList/>}/>
        <Route path='blog-category' element={<Addblogcat/>}/>
        <Route path='orders' element={<Orders/>}/>
        <Route path='color' element={<Addcolor/>}/>
        <Route path='customers' element={<Customers/>}/>
        <Route path='list-color' element={<Colorlist/>}/>
        <Route path='list-category' element={<Categorylist/>}/>
        <Route path='category' element={<Addcat/>}/>
        <Route path='list-brand' element={<Brandlist/>}/>
        <Route path='brand' element={<Addbrand/>}/>
        <Route path='list-product' element={<Productlist/>}/>
        <Route path='product' element={<Addproduct/>}/>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
