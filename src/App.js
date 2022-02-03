import logo from './logo.svg';
import './App.css';

function App() {
  const age = 26;
  return (
    <div className="App">
      {
        [{name:"Kiran",age:26},{name:"Sakshi",age:25}].map((el)=>{
         return (
            Userdata(el)
         )
        })
      }
    </div>
  );
}

function Userdata(el){
  return (           <div>
    <h1>Hello {el.name}</h1>
    <h2>your age is {el.age}</h2>
  </div>)
}

export default App;
