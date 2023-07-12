import React from "react";

const Header = (props) =>{
    return(
        <div className="search-container">
            <h1>News Feedly Inc.</h1>
            <form onSubmit={props.handleSearch}>
                <input type="text" name="search" placeholder="Search news" />
                <button type="submit">Search</button>
            </form>
      </div>
    )
}
export default Header;