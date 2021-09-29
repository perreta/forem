import { useState } from "react";
import { Form,TextArea, Button } from "semantic-ui-react";


function CategoryContainer({ user, category, categoryArray, setCategoryArray, enableAdmin}) {
  
    const [enableNewCategory, setEnableNewCategory] = useState(false)
    const [newCategoryContent, setNewCategoryContent] = useState(false)
    const [newCategoryPicture, setNewCategoryPicture] = useState(false)

    function handleNewCategory(){
        setEnableNewCategory(prevEnableNewCategory => !prevEnableNewCategory)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newCategory = {
            category: newCategoryContent,
            picture: newCategoryPicture
        };
        fetch("/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCategory),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log("hi")
            console.log(data)
            console.log("hi")
            // setCategoryArray((prevCategories) => [...prevCategories, data])
        });
        event.target.reset();
    }

    function handleInputChange(event) {
        setNewCategoryContent(event.target.value);
    }

    // function handleButtonClick(){
    //     setNewCategoryClick(!newCategoryClick)
    // }

    function handlePictureInputChange(event){
        setNewCategoryPicture(event.target.value)
    }

    return (
        <>
            <div className="categories">{category}</div>
            <br/>
            {enableAdmin ? (
                <>
                    <button onClick={handleNewCategory}> New Category </button>
                    <Form className={enableNewCategory ? "category-form" : "hidden"} onSubmit={handleSubmit}>
                        <Form.Field
                            label="New Category:"
                            name="input"
                            autoComplete="off"
                            type="text"
                            placeholder="Enter new category"
                            control={TextArea}
                            onChange={handleInputChange}
                        />
                        <Form.Field
                            label="Category Picture:"
                            name="input"
                            autoComplete="off"
                            type="text"
                            placeholder="Enter picture url"
                            control={TextArea}
                            onChange={handlePictureInputChange}
                        /> 
                        <Button type="submit" className="submit-button">
                            Submit
                        </Button>
                        <Button className="cancel-button" onClick={handleNewCategory}>
                            Cancel
                        </Button>
                    </Form>
                </>
            ) : (
                null
                )}
        </>
    );
}

export default CategoryContainer;
