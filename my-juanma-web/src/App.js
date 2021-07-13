import './App.css';
import { NavbarComponent } from './Components/Navbar/Navbar.jsx';
import "./Components/Navbar/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListConteiner } from './Conteiners/ItemListConteiner';
import { ItemDetailConteiner } from './Conteiners/ItemDatailConteiner/ItemDetailConteiner';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="asd1">
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={ItemListConteiner} />
          <Route path="/category/:id" component={ItemListConteiner} />
          <Route exact path="/item/:id" component={ItemDetailConteiner} />
          
         
        <hr/>
        </Switch>
      <div>
        <h1> footer </h1>
      </div>


    </BrowserRouter>
          </div>
  );
}

export default App;







