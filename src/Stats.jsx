import { useState } from "react"

function Stats({items}){
    if(!items.length){
      return <footer className='stats'><em>Start packing!</em></footer>
    }
  
  
    let numItems=items.length
    let itemPacked=items.filter((item)=>item.packed).length
    const packed= Math.round(itemPacked/numItems*100)
  
    return(
  
    <footer className='stats'>
    {packed==100 ? <em>You are ready to go!!! ✈</em> : <em>You have {numItems} items on your list, and you already packed {itemPacked} ({packed}%)</em>}
    </footer>
    
    )
  }

  export default Stats;