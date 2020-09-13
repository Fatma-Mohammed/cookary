import React from 'react';


const Header = ({getSearch,search ,updateSearch}) =>{
    return(
        <div className="header">
            <form onSubmit={getSearch} className="search-form">
            <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
            <button type="submit" className="search-button">
            Search
            </button>
            </form>
        </div>

    );
}

export default Header;