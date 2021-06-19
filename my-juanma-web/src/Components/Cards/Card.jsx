import { ItemCount } from '../itemCount/ItemCount';


export const CardComponent = (props) => {
return(
    <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-tittle">Card tittle</h5>
            <p className="card-text"> example</p>
            <ItemCount stock="10" initial="1"/>
            <a href="#" className="btn btn.primary">GoGo</a>
        </div>

    </div>
)


}