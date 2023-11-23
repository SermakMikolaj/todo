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
  const Delete = () => {
    
  }


return(
  <div>
      tittle:
      <input required onChange={change1}></input>
      amount:
      <input required onChange={change2}></input>
    < button onClick={Create}>Dodaj</button>
    <button onClick={Delete}>Usun</button>
  </div>
);
}



export default NewItem;