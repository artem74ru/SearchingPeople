import Search from "./components/Search/Search.jsx";
import Header from "./components/Header/Header.jsx";
import Tab   from "./components/Tab/Tab.jsx";
import './App.css';
import axios from "axios";

async function fetchUsers(params) {
  const response = await axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users')
  console.log(response.data.items)
}

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Tab />
      <button onClick={fetchUsers}>Get Users</button>
    

    </div>
  );
}

export default App;
