import Navbar from "./componenet/Navbar";
import "./App.css";
import Home from "./componenet/Home";
import { Switch, Route } from "react-router-dom";
import Products from "./componenet/Products";
import Product from "./componenet/Product";
import Cart from "./componenet/Cart";
import Checkout from "./componenet/Checkout";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
