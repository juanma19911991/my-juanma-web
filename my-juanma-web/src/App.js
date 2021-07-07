import './App.css';
import { NavbarComponent } from './Components/Navbar/Navbar.jsx';
import "./Components/Navbar/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListConteiner } from './Conteiners/ItemListConteiner';
import { ItemDetailConteiner } from './Conteiners/ItemDatailConteiner/ItemDetailConteiner';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {

  return (


    <div className='asd1'>
      <BrowserRouter>
        <NavbarComponent />

        <Switch>
          <Route exact path="/" component={ItemListConteiner} />
          <Route exact path="/category/:id" component={ItemDetailConteiner} />
          <Route exact path="/item/:id" component={ItemDetailConteiner} />
          <div className='a1'>
            <div>
              <ItemListConteiner greeting={"Pagina Web"} />
            </div>
          </div>
          <ItemDetailConteiner />

        </Switch>
      </BrowserRouter>
    </div>

  )
}

export default App;
