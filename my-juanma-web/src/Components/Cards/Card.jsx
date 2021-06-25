import { ItemCount } from '../itemCount/ItemCount';


export const CardComponent = (props) => {
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card.tittle">Tarjeta</h5>
                <p className="card-text"> ejemplo </p>
                <ItemCount stock="10" initial="1" />
                <a href="#" className="btn btn.primary">Go</a>
            </div>

        </div>
    )


}