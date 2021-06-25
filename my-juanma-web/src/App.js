import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from './Components/Navbar/Navbar.jsx';
import "./Components/Navbar/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListConteiner } from './Conteiners/ItemListConteiner';
import { CardComponent } from './Components/Cards/Card';








function App() {

  return (


    <div>

      <NavbarComponent />
      <div>
        <ItemListConteiner greeting={"Hola1234"} />
      </div>

      {/* <CardComponent />
      <CardComponent />
      <CardComponent /> */}
    </div>

  )
}

export default App;
