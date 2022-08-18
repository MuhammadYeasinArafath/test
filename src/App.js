import About from "./component/About/About";
import Blog from "./component/Blog/Blog";
import Home from "./component/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./component/Contact/Contact";
function App() {
  return (
  <>
 
{ /*
<Home></Home>
<Navbar></Navbar>
<Footer></Footer>
<Blog></Blog>
<About></About>
 <Contact></Contact>
*/
}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Blog' element={<Blog />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
        </BrowserRouter>
  </>

  );
}

export default App;
