import { useState} from "react";



function Form({onAddItem}){
    const [text, setText]=useState("")
    const [quantity, setQuantity]=useState(1)
    
    
    
    
      function handleSubmission(e){
        e.preventDefault();
      let newItem={quantity,text,packed:false,id:Date.now() };
      onAddItem(newItem)
      
      setText("")
      setQuantity(1);
      }
    
      return(
        <form className='add-form' onSubmit={handleSubmission}>
          <h3>What do you need ?</h3>
          <select value={quantity} onChange={e=>setQuantity(Number(e.target.value))}>{Array.from({length:20},(_,i)=>i+1).map(num=><option value={num} key={num}>{num}</option>)}</select>
          <input type='text' placeholder='item' value={text} onChange={(e)=>setText(e.target.value)}></input>
          <button>Add +</button>
        </form>
      )
    }

    export default Form;