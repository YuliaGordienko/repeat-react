import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import List from "./List/list";
import { Context } from "./context";
const check = {
  checked: true,
};
const changeCheck = () => {
  console.log("this function change check");
};
function App() {
  return (
    <Context.Provider value={{ check, changeCheck }}>
      <div className="App">
        <Header name="Yulia" title="WebSite" />
        <List />
      </div>
    </Context.Provider>
  );
}

export default App;
