import axios from 'axios';
import { useEffect,useState } from 'react';

const Axios = () => {
    const [data, setData] = useState()
    useEffect(() => {
        
        const fetchData = async () =>{
           try{ const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
            console.log(data);
            setData(data.data);
        }catch(error){
            console.log(error)
        }
    
        }
        fetchData()

    },[])

  return (
    <div>Axios</div>
  )
}

export default Axios