import './App.css';
import NewItem from './components/NewItem';
import ItemList from './components/ItemList';
import Item from './components/Item';
import { useState } from 'react';


function App() {
   const [DUMMY_DATA , setDUMMY_DATA]= useState([
 
    ])
   const onSaveInnerDataHandler = (e) => {
      setDUMMY_DATA([...DUMMY_DATA, e])
      console.log(e)
   }
   return(
       <div>
        
               <ItemList items={DUMMY_DATA}></ItemList>
               <NewItem onSaveInnerData={onSaveInnerDataHandler}></NewItem>
       </div>
   )
};


export default App;
