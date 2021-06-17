import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from './Components/Navbar/Navbar.jsx';
import "./Components/Navbar/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListConteiner } from './Conteiners/ItemListConteiner';





function App() {

  return (

    <div>
      <NavbarComponent />
      <div>
        <ItemListConteiner greeting={"Hola1234"} />
      </div>

    </div>

  )
}

export default App;
