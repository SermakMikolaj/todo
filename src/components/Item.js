import { useState } from "react";
const Item = (props) => {
    const[style, setStyle] = useState("shown");
    const remove = () => {
        setStyle((prev) => !prev)
    };
    return(
        <div onClick={remove}
        style={{textDecoration: style ? 'none' : 'line-through'}}>
        <h2>{props.title}</h2>
        <p>{props.amount}</p>
        </div>
    );
}
export default Item;