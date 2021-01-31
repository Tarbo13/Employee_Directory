import React, { useEffect, useState } from "react";
import FilterInput from "./FilterInput";
import Table from "./Table";
import { getUsers } from "./API";
import './App.css';


const styles = {
inputSty: {       
  background: "linear-gradient(to bottom,  rgba(30,87,153,0) 0%,rgba(30,87,153,0.8) 15%,rgba(30,87,153,1) 19%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 81%,rgba(30,87,153,0.8) 85%,rgba(30,87,153,0) 100%)"

  }
}


function App() {
const [initialUsers, updateAvailableUsers] = useState([]);
const [usersToRender, updateUsersToRender] = useState([]);

useEffect(() => {
  getUsers().then(({data: { results }}) => updateAvailableUsers(results));
  
},
 []);
 
  return (
    <div className="App">
      <h1 className="App-logo">Employee Directory</h1>
      <p className="App-logo">
        To filter by first name, please begin your search in the user input below
      </p>
      <div style={styles.inputSty}>
      <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
      </div>
      <Table users={usersToRender} />
    </div>
  );
}

export default App;
