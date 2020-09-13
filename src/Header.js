import React from 'react';


const Header = ({getSearch,search ,updateSearch}) =>{
    return(
        <div className="header">
            <h1 className="logo">Cookary</h1>
            <form onSubmit={getSearch} className="search-form">
            <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Search with an ingredient"/>
            <button type="submit" className="search-button">
            Search
            </button>
            </form>
        </div>

    );
}

export default Header;