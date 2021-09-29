import { Link } from "react-router-dom";


function Category({ category, createdDate, updatedDate, createdAt, updatedAt, setURLCategory, setFunctionalCategory, enableAdmin}) {

    function handleClick(){
        const urlCategory = category.category.toLowerCase()
        setURLCategory(urlCategory)
        setFunctionalCategory(category)
    }
    

    return (
        <>
            <div>
                <Link to={`/categories/${category.category.toLowerCase()}`}>
                    <div className="sprite-container" style={{width: 100, height: 100}}>
                        <img src={category.picture} alt="category sprite" style={{height: 80}}/>
                    </div>
                    <h2 onClick={handleClick}>{category.category}</h2> 
                </Link>
                <p>Last post: {updatedDate}</p>     
            </div>
        </>
    )
}

export default Category;