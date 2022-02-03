import logo from './logo.svg';
import './App.css';

function App() {
  const age = 26;
  return (
    <div className="App">
      {
        [1,2,3,4].map((el)=>{
         return <h1>Hello World {el}</h1>
        })
      }
      
      <h2>My age is {age}</h2>
      <input/>
    </div>
  );
}

export default App;
