import { useState } from 'react';

// Functional component for rendering a form to add new todo categorys
export function NewCategoryForm({ addCategory }) {
    // State to track the value of the new todo category
    const [newCategory, setNewCategory] = useState('');


    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        // Check if the new todo category is empty before adding
        if (newCategory === "") return;
        // Call the addTodo function to add the new todo
        addCategory(newCategory);
        // Clear the input field after adding the todo
        setNewCategory('')
    }

    // Rendering the form
    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            {/* Form row with a label and input for the new todo category */}
            <div className="form-row">
                <label htmlFor="category">New Category</label>
                <input
                    value={newCategory}
                    type="text"
                    id='category'
                    onChange={(e) => setNewCategory(e.target.value)}
                />
            </div>

            {/* Button to submit the form and add the new todo category */}
            <button className="btn add-btn">Add</button>
        </form>
    );
}
