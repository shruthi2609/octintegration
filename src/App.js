import ListComponent from "./components/ListComponent"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import LoginPage from "./components/LoginPage"
import SearchComponent from "./components/SearchComponent"
const App=()=>{

  return(
    <Router>
   <nav>
     <Link to="/login">Signin</Link>
   </nav>
   <Routes>
    <Route path="/login" element={<LoginPage></LoginPage>}></Route>
    <Route path="/dashboard/:email" element={<ListComponent></ListComponent>}></Route>
    <Route path="/searchUser" element={<SearchComponent></SearchComponent>}></Route>
   </Routes>
   </Router>
  )
}
export default App