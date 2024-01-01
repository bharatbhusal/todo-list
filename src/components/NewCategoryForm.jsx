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
        <form className="new-category-form" onSubmit={handleSubmit}>
            {/* Form row with a label and input for the new todo category */}
            <label htmlFor="category">New Category</label>
            <div>
                <input
                    value={newCategory}
                    type="text"
                    id='category'
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                <button className="btn btn-add">Add</button>
            </div>
        </form>
    );
}
