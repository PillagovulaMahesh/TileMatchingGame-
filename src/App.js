import {Route,BrowserRouter,Routes} from "react-router-dom"

import Login from "./Components/Login"

import Home from "./Components/Home"



const App=()=>(
  <>
  <BrowserRouter>
  <Routes>
  <Route exact path="/login" Component={Login}/>
  <Route exact path="/" Component={Home}/>
  
  </Routes>
  </BrowserRouter>
  
  </>
  
 
 
)

export default App;
