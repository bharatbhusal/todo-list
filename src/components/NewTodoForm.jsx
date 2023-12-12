import { useState } from 'react';

// Functional component for rendering a form to add new todo items
export function NewTodoForm({ addTodo }) {
    // State to track the value of the new todo item
    const [newItem, setNewItem] = useState('');

    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        // Check if the new todo item is empty before adding
        if (newItem === "") return;
        // Call the addTodo function to add the new todo
        addTodo(newItem);
        // Clear the input field after adding the todo
        setNewItem("");
    }

    // Rendering the form
    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            {/* Form row with a label and input for the new todo item */}
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    value={newItem}
                    type="text"
                    id='item'
                    onChange={(e) => setNewItem(e.target.value)}
                />
            </div>

            {/* Button to submit the form and add the new todo item */}
            <button className="add-btn">Add</button>
        </form>
    );
}
