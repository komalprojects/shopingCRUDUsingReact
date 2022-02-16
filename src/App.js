
import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetails';
import Productcompoent from './containers/ProductCompoent';
import AddProduct from './containers/AddProduct';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path="/" exact component={ProductListing}></Route>
      <Route path="/product/:pid"  component={ProductDetail} />
      <Route path="/addproduct" component={AddProduct} />
      {/* <Route path="/productcompoent"  component={Productcompoent} /> */}
      <Route>404 not found</Route>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
