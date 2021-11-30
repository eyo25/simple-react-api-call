import React ,{useState , useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Home from './Compontes/Home';
function App() {
  const[Leagues,setLeagues]=useState([])
    const[Loding,isLoding]=useState(true)
    useEffect( ()=>{
        const getLeagues= async ()=>{
            const leageData= await axios({
                'method': 'GET',
                'url': 'http://api.football-data.org/v2/competitions/PL/matches/?matchday=14',
                'dataType': 'json',
                'headers': {
                    'X-Auth-Token': 'c51eca4f623c4a10afa7af3e783a5f0d'
                }
                
              })
console.log(leageData.data)
setLeagues(leageData.data)
isLoding(false)
        }
        getLeagues()
    },[])
  return (
    <div className="App">
      <Home Loding={Loding} Leagues={Leagues}/>
    </div> 
  );
}

export default App;
