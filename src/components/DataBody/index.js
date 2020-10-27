import React, { useState, useContext, useEffect } from "react";
import "./styles.css";
import API from "../../utils/API";
import DataContext from "../../utils/DataContext";
import Nav from "../Nav/index";
import DataCard from '../DataCard'

function DataBody() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [activeUser, setActiveUser] = useState(null);
    const handleSearchChange = val => {
        //do some filtering with value
        const filtered = users.filter(user => user.name.first.toLowerCase().includes(val) || user.name.last.toLowerCase().includes(val));
        setFilteredUsers(filtered);
    }
    useEffect(() => {
        API.getUsers()
            .then(({ data: { results } }) => {
                console.log(results[0])
                setUsers(results);
                setFilteredUsers(results);
            })
    }, [])
    
    return (
        <DataContext.Provider value={{ handleSearchChange }}>
            <Nav />
            <div className="row">
                <div className="col-6">
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((a, i) => {
                                return <tr onClick={() => setActiveUser(i)}>
                                    <td><img src={a.picture.thumbnail} /></td>
                                    <td>{a.name.first}</td>
                                    <td onClick={() => {context.handleSort(name.toLowerCase());}}>{a.name.last}</td>
                                    <td>{a.email}</td>
                                    <td>{a.phone}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-6">
                    <DataCard {...filteredUsers[activeUser]} />
                </div>
            </div>
        </DataContext.Provider>
    )
};
export default DataBody;