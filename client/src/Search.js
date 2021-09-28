import { useState } from "react";
import { Input } from 'semantic-ui-react'
import SearchRender from "./SearchRender";

function Search({ user, setURLTopic, urlCategory }){
    const [searchTerm, setSearchTerm] = useState("")
    const [searchInput, setSearchInput] = useState("")



    function handleInput(event) {
        setSearchInput(event.target.value)
    }
    
    function handleSearchTerm(event){
        event.preventDefault()
        setSearchTerm(searchInput)
    }
    
    return(
        <div>
            <form className = 'searchForm'>
                <Input 
                    type="text" 
                    placeholder='Search for a thread' 
                    name="search" 
                    size="large" 
                    onChange={handleInput}
                />
                
                <button type='submit' onClick={handleSearchTerm}>Search</button>
            </form>
            <br/>
            
            { searchTerm.length < 1 ? (
                null 
            ) : ( 
                <SearchRender user={user} searchTerm={searchTerm} setURLTopic={setURLTopic} urlCategory={urlCategory}/>
            )}
            
        </div>
    )
}
export default Search