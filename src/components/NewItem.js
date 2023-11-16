import React,{useState} from "react";

function NewItem(props){
const [Item,NewItem] = useState({
  title:'',
  amount:''
})
const change1 = (e) =>{
  NewItem((prevState) =>
  {return{...prevState, title: e.target.value}})
}
const change2 = (e) =>{
  NewItem((prevState) =>
  {return{...prevState, amount: e.target.value}})
}
  const Create = () =>{
    props.onSaveInnerData(Item)
  }
 const ItemList = (props)=>{
  return(
    <div>
      {props.items.length ===0 && <p> NIE MA </p>}
      {props.items.length >0 &&
      props.items.map((item, index)=> (
        <Item 
        key={index}
        title={item.tittle}
        amount={item.amount}></Item>
      ))}
    </div>
  )
 }

return(
  <div>
      tittle:
      <input required onChange={change1}></input>
      amount:
      <input required onChange={change2}></input>
    < button onClick={Create}>Dodaj</button>
  </div>
)
}



export default NewItem;