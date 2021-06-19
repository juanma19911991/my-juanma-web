import { useState } from "react";

export const ItemCount = (props) => {

const [valor, setValor] = useState(props.initial)

function onAdd(){
    if (valor < props.stock){
        setValor(parseInt(valor)+1)
    } 
}

function onSubstract(){
    if (valor > 0){
        setValor(parseInt(valor)-1)
    }else{
        alert("La cantidad no puede ser menor a 1")
    }
}

return (
    <div>
        <button onClick={onSubstract}>-</button>
        <input type="text" value={valor} />
        <button onClick={onAdd}>+</button>
            </div>
)
}