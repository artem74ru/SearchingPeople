import Search from "./components/Search/Search.jsx";
import Header from "./components/Header/Header.jsx";
import Tab   from "./components/Tab/Tab.jsx";
import User from "./components/User/User.jsx";
import UserList from "./components/UserList/UserList.jsx";
import './App.css';
import axios from "axios";
import { useState } from "react";

const options = {
  method: "GET",
  url: "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users",
  params: { __example: "all" }, // получение из разных департаментов
  headers: { Accept: "application/json, application/xml" },
};

function App() {

  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const { data } = await axios.request(options);
      console.log(data)
      setUsers(data.items);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      {/* <Header />
      <Search />
      <Tab />*/}
      <button onClick={getUsers}>Get Users</button>
      <UserList users={users}/>
    </div>
  );
}

export default App;
