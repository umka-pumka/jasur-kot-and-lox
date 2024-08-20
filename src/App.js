import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Card from "./Card";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function App() {
    return(
        <div>
      
     <BrowserRouter>
     <header>

        <Link to='/'>home</Link>
        <Link to='/page1'>page 1</Link>
        <Link to='/page2'>page 2</Link>
        <Link to='/page3'>page 3</Link>

     </header>
     <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/user/:id" element={<Card />} />


     </Routes>

     </BrowserRouter>


        </div>
    )
}

export default App;