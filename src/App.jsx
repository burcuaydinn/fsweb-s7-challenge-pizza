import "./App.css";
import { Switch, Route } from "react-router-dom";
import Baslik from "./components/Baslik";
import AnaSayfa from "./components/AnaSayfa";
import SiparisAlindi from "./components/SiparisAlindi";
import SiparisOlustur from "./components/SiparisOlustur";
import { useState } from "react";

const initialOrder = {
  size: "size",
  hamurKalinliği: "hamurKalinliği",
  malzemeler: "malzemeler",
};

function App() {
  const [order, setOrder] = useState(initialOrder);
  return (
    <div className="App">
      <Baslik />
      <Switch>
        <Route exact path="/SiparisAlindi">
          <SiparisAlindi currentOrder={order} />
        </Route>
        <Route exact path="/SiparisOlustur">
          <SiparisOlustur setSpars={setOrder} />
        </Route>
        <Route exact path="/">
          <AnaSayfa />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
