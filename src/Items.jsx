
function Items({description,quantity,packed ,id, onDelete,onToggle}){
  
  
  
    return(
      <div>
        <li><input type='checkbox' value={packed} onChange={()=>onToggle(id)}/>
        <span style={packed==true ? {textDecoration:"line-through"}:{textDecoration:"none"}}>{quantity} {description}</span>
         <button onClick={()=>onDelete(id)}>❌</button></li>
        
      </div>
    )
    
  }

  export default Items