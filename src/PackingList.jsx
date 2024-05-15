import { useState } from "react";
import Items from "./Items";

function PackingList({items, onDelete, onToggle, onClear}){

    const [sortBy, setSortBy]=useState("input")
  
    let sortedItems;
  
    if(sortBy=="input"){
      sortedItems=items;
    }
    if(sortBy=="description"){
      sortedItems=items.slice().sort((a,b)=>a.text.localeCompare(b.text));
    }
  
    if(sortBy=="packed"){
      sortedItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
    }
  
    return(
      <div className='list'>
      <ul>
      {sortedItems.map((items)=>(
        <Items description={items.text} key={items.id} quantity={items.quantity} packed={items.packed} onDelete={onDelete} id={items.id} onToggle={onToggle}/>
      ))}
      </ul>
  
  
  
        <div className='actions'>
          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
            <option value="input">Sort by Input</option>
            <option value="description">Sort by Alphabet</option>
            <option value="packed">Sort by Status</option>
  
          </select>
          <button onClick={onClear}>Clear All</button>
        </div>
      </div>
    )
  }
  
  

  export default PackingList;