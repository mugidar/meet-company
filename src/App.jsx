import React from "react"
import { useState } from "react";
import API from "./api";  
import Users from "./components/Users";
import UsersWantCount from "./components/UsersWantCount";

const App = () => {
    
    const [users, setUsers] = useState(API.users.fetchAll());


    const handleDelete = (id) => {
      setUsers(users.filter((user) => user._id !== id));
    };
    const handleBookmarkToggle = (id) => {
      setUsers((prev) => prev.map((user) => {
        if(user._id === id) {
          return {...user, bookmark: !user.bookmark }
        } return user
      }))
    } 

    return (<>
     <UsersWantCount length={users.length} />
    <Users  onToggleBookmark={handleBookmarkToggle} onDelete={handleDelete} users={users}/>
  
    </>)
}

export default App