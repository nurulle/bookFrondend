import { BrowserRouter, Route } from "react-router-dom";
import Index from "../src/pages/Index"
import Signin from "../src/pages/Signin"
import Signup from "../src/pages/Signup" 
import Home from "../src/pages/Home"
import Books from "../src/pages/Books"
import Borrowpage from "../src/pages/Borrowpage"
import Category from "../src/pages/Category"
import Categorynologin from "../src/pages/Categorynologin"
import Confirmation from "../src/pages/Confirmation"
import Description from "../src/pages/Description"
import Description1 from "../src/pages/Description1"
import Outofdate from "../src/pages/Outofdate"
import Profil from "../src/pages/Profil"
import Search from "../src/pages/Search"
import Uploadbook from "../src/pages/Uploadbook"
import Waiting from "../src/pages/Waiting"
import WaitingBorrow from "../src/pages/WaitingBorrow"

// import ReactStars from "react-rating-stars-component";




// const firstExample = {
//   size: 30,
//   value: 5,
//   edit: false
// };

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/home" component={Home}/>
      <Route path="/book" component={Books}/>
      <Route path="/borrow" component={Borrowpage}/>
      <Route path="/category" component={Category}/>
      <Route path="/categoryno" component={Categorynologin}/>
      <Route path="/confirmation" component={Confirmation}/>
      <Route path="/description" component={Description}/>
      <Route path="/description1" component={Description1}/>
      <Route path="/outofdate" component={Outofdate}/>
      <Route path="/profil" component={Profil}/>
      <Route path="/search" component={Search}/>
      <Route path="/upload" component={Uploadbook}/>
      <Route path="/waiting" component={Waiting}/>
      <Route path="/waitingborrow" component={WaitingBorrow}/>


      {/* <ReactStars {...firstExample} /> */}

    </BrowserRouter>

  );
}

export default App;
