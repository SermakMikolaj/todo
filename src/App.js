import './App.css';
import NewItem from './components/NewItem';
import ItemList from './components/ItemList';
import Item from './components/Item';

const DUMMY_DATA=[
  { id:'1',
   title:'toilet paper',
   amount:4.12
},
{
   id:'2',
   title:'New TV',
   amount:799.49
},
{
   id:'3',
   title:'Cabbage',
   amount:8.67
},
{
   id:'4',
   title:'tomatoes',
   amount:5.6
}
];
function App() {
   const onSaveInnerDataHandler = (e) => {
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
