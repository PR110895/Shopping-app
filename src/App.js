import Navbar from "./componenet/Navbar";
import "./App.css";
import Home from "./componenet/Home";
import { Switch, Route } from "react-router-dom";
import Products from "./componenet/Products";
import Product from "./componenet/Product";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
