import {useState, useEffect} from 'react'

const UsingFetch = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(responce => responce.json())
        .then(data=> setData(data))
    },[])
    console.log(data)
  return (
    <div>Using Fetch</div>
  )
}

export default UsingFetch