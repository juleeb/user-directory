import React, { useContext } from "react";
import "./styles.css";
import DataContext from "../../utils/DataContext.js";

function Search (){
    const context = useContext(DataContext);
    return (
        <div className="searchname">
            <form className="form-inline">
                <input
                    type="search"
                    placeholder="Search"
                    onChange={e=> context.handleSearchChange(e.target.value)}
                    />
                <button className="btn" type="submit">
                Search
                </button>
            </form>
        </div>
    );
};
export default Search;