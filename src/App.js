import './App.css';
import UserProfile from "./Components/UserProfile/index"

const userDetails = {
  imageUrl:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name:'Vamsi', role:'Software Engineer'
}

const App = ()=>{
  <UserProfile userDetails={userDetails}/>
}





export default App;
