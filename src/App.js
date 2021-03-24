import { BrowserRouter, Route } from "react-router-dom";
import Index from "../src/pages/Index"
import Signin from "../src/pages/Signin" 
import Detail from "../src/pages/DetailBook"

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/detail" component={Detail}/>
    </BrowserRouter>
  );
}

export default App;
