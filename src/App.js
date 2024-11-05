import Search from "./components/Search/Search.jsx";
import Header from "./components/Header/Header.jsx";
import Tab   from "./components/Tab/Tab.jsx";
import './App.css';
import axios from "axios";
import { useState } from "react";

const all = {
  method: "GET",
  url: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users',
  headers: {Prefer: 'code=200, example=all', Accept: 'application/json, application/xml'},
  params: { __example: "all" }, // получение из разных департаментов
};

function App() {

const [users, setUsers] = useState([]);

async function getUsers() {
      try {
        const { data } = await axios.request(all);
        setUsers(data.items);
      } catch (error) {
        console.error(error);
      }
    }
    
window.addEventListener('load', () => {
    getUsers();
  });

  return (
    <div className="App">
      <Header />
      <Search />
      <Tab users={users}/>
    </div>
  );
}

export default App;