import { useRef } from "react"
function AddItem({newItem, setNewItem, handleSubmit}) {
    
    const inpuRef = useRef() 

  return (
    <form className="addForm" onSubmit={handleSubmit}>
        
        <input 
            autoFocus
            ref={inpuRef}
            id="addItem"
            type="text"
            placeholder="Add Item.."
            autoComplete="off"
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />

    </form>
  )
}

export default AddItem