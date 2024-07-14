import React from 'react'
import CustomHok from './useFetchData'


const CustomFechHook = () => {
    const {data, loading, error} = CustomHok('https://jsonplaceholder.typicode.com/todos');
    if(loading) return <div>Loading...</div>
    if(error) return <div>Error...</div>
    return <div>
        {JSON.stringify(data)};
    </div>
}

export default CustomFechHook