// Functional component for rendering an individual todo item
export default function DeleteTodoItem({ id, category, setCategories }) {
    // Function to delete a todo
    function deleteCategory(id) {
        console.log("delete called");
        setCategories(currentCategory => {
            return currentCategory.filter(category => category.id !== id);
        });
    }

    // Rendering the todo item
    return (
        < button
            className="btn btn-danger btn-delete-category"
            onClick={() => deleteCategory(id)}>Delete {category}</button >
    );
}
