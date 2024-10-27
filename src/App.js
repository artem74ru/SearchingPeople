import Search from "./components/Search/Search.jsx";
import Header from "./components/Header/Header.jsx";
import Tab   from "./components/Tab/Tab.jsx";
import './App.css';
import axios from "axios";

const options = {
  method: "GET",
  url: "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users",
  params: { __example: "ios" }, // получение из разных департаментов
  headers: { Accept: "application/json, application/xml" },
};

async function Users() {
    try {
    const { data } = await axios.request(options);
    console.log(data);
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
