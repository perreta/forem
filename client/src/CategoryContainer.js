function CategoryContainer({ user, category, categoryArray, setCategoryArray }) {
  
    
    // const category = categoryArray.map((category) => {
    //     return (
    //         <Category
    //             category={category}
    //             subcategory={category.category.to_lower_case}
    //             user={user}
    //             key={category.id}
    //             id={category.id}
    //             createdDate={category.created_date}
    //             updatedDate={category.updated_date}
    //             createdAt={category.created_at}
    //             updatedAt={category.updated_at}
    //             categoryArray={categoryArray}
    //             setCategoryArray={setCategoryArray}
    //         />
    //     );
    // });


    return (
        <>
            <div className="categories">{category}</div>
        </>
    );
}

export default CategoryContainer;
