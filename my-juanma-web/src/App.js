import { BrowserRouter, Router, Switch } from 'react-router-dom';
import './App.css';
import { NavbarComponent } from './Components/Navbar/Navbar.jsx';
import "./Components/Navbar/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListConteiner } from './Conteiners/ItemListConteiner'; 
import { ItemDetailConteiner } from './Conteiners/ItemDatailConteiner/ItemDetailConteiner';



function App() {

  return (


    <div className='asd1'>

      <NavbarComponent />
      <div className='a1'>
        <div>
          <ItemListConteiner greeting={"Pagina Web"} />
        </div>
      </div>
         <ItemDetailConteiner /> 
      {/* <CardComponent />
      <CardComponent />
      <CardComponent /> */}
    </div>

  )
}

export default App;
