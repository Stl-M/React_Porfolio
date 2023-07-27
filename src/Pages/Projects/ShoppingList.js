import { useEffect, useState } from 'react'
import * as  FaIcons  from 'react-icons/fa'
import AddItem from './AddItem';

function ShoppingList() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
    const [newItem, setNewItem] = useState('')

    useEffect(() => {
        localStorage.setItem('shoppinglist', JSON.stringify(items));
    }, [items])

      
    const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = { id, checked: false, item };
        const listItems = [...items, myNewItem];
        setItems(listItems);
      }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem('');
    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    }
  return (
    <section className='shoppinglist'>
        <h1>Shopping List</h1>
       
        <ul>
            {items.map((item) => (
                <li className='item' key={item.id}>
                    <input
                        type='checkbox'
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                    />
                    <label 
                        style={(item.checked) ? {textDecoration: 'line-through'} : null}
                        onDoubleClick={() => handleCheck(item.id)}
                    > {item.item} </label>                 
                    <FaIcons.FaTrashAlt
                        onClick={() => handleDelete(item.id)}
                        role='button'
                        tabIndex='0'
                    />
                </li>  
            ))}
        </ul>
        <AddItem
            handleSubmit={handleSubmit}
            newItem={newItem}
            setNewItem={setNewItem}
        
        />
    </section>
  )
}

export default ShoppingList