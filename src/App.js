import Search from "./components/Search/Search.jsx";
import Header from "./components/Header/Header.jsx";
import Tab   from "./components/Tab/Tab.jsx";
import './App.css';
import axios from "axios";

const options = {
  method: "GET",  
  url: "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users",
  params: { __example: "all" }, // получение из разных департаментов
  headers: { Accept: "application/json, application/xml" },
};

async function Users() {
    try {
    const { data } = await axios.request(options);
    console.log(data.items[0].firstName);
    console.log(data.items[1].firstName);
    console.log(data.items[2].firstName);
    console.log(data.items[3].firstName);
    console.log(data.items[4].firstName);
    console.log(data.items[5].firstName);
    console.log(data.items[6].firstName);
    console.log(data.items[7].firstName);
    console.log(data.items[8].firstName);
    console.log(data.items[9].firstName);
    console.log(data.items[10].firstName);
    console.log(data.items[11].firstName);
    } catch (error) {
      console.error(error);
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Tab />
      <button onClick={Users}>Get Users</button>
     
    </div>
  );
}

export default App;