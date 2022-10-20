import { useState } from 'react';
import SearchBar from './SearchBar.jsx';


const SearchableList = () => {
    const [item, setItems] = useState(['eggs', 'milk', 'bread', 'coffee', 'cookies'])
    const [search, setSearch] = useState('');

    return (

        <>
        <div>
            <SearchBar text={search} changeHandler={e=> setSearch(e.target.value)}/>
           {
               item
               .filter(item => item.startsWith(search.toLowerCase()))
               .map((item) => <p>{item}</p>)
           } 
        </div>
        </>

    )
}

export default SearchableList;