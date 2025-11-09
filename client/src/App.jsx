import {BrowserRouter , Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Service } from './pages/Service';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Navbar } from './components/Navbar';
import {Logout} from "./pages/Logout";
import {Error} from "./pages/Error";
import {AdminLayout} from "./layouts/AdminLayout";
import { AdminContacts } from "./pages/AdminContacts";
import { AdminUsers } from "./pages/AdminUsers";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/service' element={<Service/>} />      
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/logout' element={<Logout/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/admin" element={<AdminLayout/>} >
      <Route path="users" element={<AdminUsers/>} />
      <Route path="contacts" element={<AdminContacts/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
