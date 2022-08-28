
import './App.css';
import AllRoutes from './AllRoutes';
import Add from './Add to cart/Add';
import Checkout from './Checkout/Checkout';
import Thanku from './Thanku/Thanku';


function App() {
  return (
    <div className="App">
     {/* <Checkout/> */}
     
     <AllRoutes/>
        {/* <Add/> */}
    </div>
  );
}

export default App;
