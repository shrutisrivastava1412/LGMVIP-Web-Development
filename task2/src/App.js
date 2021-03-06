import { useEffect,useState } from 'react';
import Cards from './Components/Cards';
import './App.css';
import Header from './Components/header';
import Loading from './Components/Loading';

function App() {
  const usersUrl = "https://reqres.in/api/users?page=1";

  const [userData,setUserData]=useState([]);
  const [load,setLoad]=useState(true);
  const[btn,setBtn] = useState(false);
  const getData = async()=>{
    try{
    const response = await fetch(usersUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
    console.log(jsonData.data);
    }
    catch(error){
      setLoad(false);
    }
    
  }
  useEffect(() => {
    getData();
}, []);
  
const btnC=()=>{
  getData();
  var c = !(btn);
    setBtn(c);
}
  
  return (
    <div className="App">
      <Header title="GrowMore(VIP)"/>
      <button onClick={btnC} className="btnnn">Get Users</button>
      {btn?
      
        load?
        <Cards users = {userData.data} />:<Loading/>
      
      :null}
      
    </div>
  );
}

export default App;
