import React, { useState } from 'react';

function ComA() {
    // Initial state is an empty array
    const [items, setItems] = useState([]);
    // for input value
    const [newItem, setNewItem] = useState('');
    //    // for edit value
    const [editing, setEditing] = useState(false);
    //   // for update value
    const [currentItem, setCurrentItem] = useState({ id: null, name: '' });

    // Add item
    const addItem = () => {
        if (!newItem) return;
        setItems([...items, { id: items.length + 1, name: newItem }]);
        setNewItem('');
    };

    // Edit item
    const editItem = (item) => {
        setEditing(true);
        setCurrentItem(item);
        
    };
    console.log(currentItem);

    // Update item
    const updateItem = () => {
        setItems(
            items.map((item) =>
                item.id === currentItem.id ? { ...item, name: currentItem.name } : item
            )
        );
        setEditing(false);
        setCurrentItem({ id: null, name: '' });
    };

      // Delete item
      const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
      };

    return (
        <div>
            <h1>CRUD App with React</h1>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item"
            />
            <button onClick={addItem}>Add</button>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => editItem(item)}>Edit</button>
                         <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            {editing && (
                <div>
                    <h2>Edit Item</h2>
                    <input
                        type="text"
                        value={currentItem.name}
                        onChange={(e) =>
                            setCurrentItem({ ...currentItem, name: e.target.value })
                        }
                    />
                    <button onClick={updateItem}>Update</button>
                </div>
            )}
        </div>
    );
}

export default ComA;
