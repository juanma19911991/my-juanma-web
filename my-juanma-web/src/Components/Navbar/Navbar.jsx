import { CardWidgetComponent } from "../cardWidget/CardWidget";



export const NavbarComponent =  ()=>  {
    const shopName = 'JuanmaWeeb';
    return(
    
    
    <div className="App">

    <header className="Bar">
      <p className="Logo">{shopName}</p>
    <nav className="Nav">
      <ul className="Links">
        <li className="Link"><a href="">Inicio</a></li>
        <li className="Link"><a href="">Contacto</a></li>
        <li className="Link"><a href="">Nosotros</a></li>
        <li className="Link"><a href="">Info</a></li>
       <CardWidgetComponent />
      </ul>
    </nav>
    </header>
  </div>
    )
}

