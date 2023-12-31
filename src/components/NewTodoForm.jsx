import { useState } from 'react';

// Functional component for rendering a form to add new todo items
export function NewTodoForm({ addTodo }) {
    // State to track the value of the new todo item
    const [newItemTitle, setNewItemTitle] = useState('');
    const [itemCategory, setItemCategory] = useState('');

    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        // Check if the new todo item is empty before adding
        if (newItemTitle === "") return;
        // Call the addTodo function to add the new todo
        addTodo(newItemTitle, itemCategory);
        // Clear the input field after adding the todo
        setNewItemTitle("");
        setItemCategory("")
    }


    // Rendering the form
    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            {/* Form row with a label and input for the new todo item */}
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    value={newItemTitle}
                    type="text"
                    id='item'
                    onChange={(e) => setNewItemTitle(e.target.value)}
                />
                <label htmlFor="category">Category</label>
                <div className="category-selector">

                    <button className={`btn btn-category ${itemCategory === "College" ? "active" : "btn-category"}`} type="button" onClick={() => setItemCategory("College")}>College</button>
                    <button className={`btn btn-category ${itemCategory === "Personal" ? "active" : "btn-category"}`} type="button" onClick={() => setItemCategory("Personal")}>Personal</button>
                    <button className={`btn btn-category ${itemCategory === "Secrect" ? "active" : "btn-category"}`} type="button" onClick={() => setItemCategory("Secrect")}>Secrect</button>
                </div>
            </div>

            {/* Button to submit the form and add the new todo item */}
            <button className="add-btn">Add</button>
        </form>
    );
}
