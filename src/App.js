import logo from './logo.svg';
import './App.css';

function App() {
  return <div>
    <div>
      <h1>
        Mobile Operating System
      </h1>
      <ul>
        <li>
          <h3>Android</h3>
        </li>
        <li>
          <h3>Blackberry</h3>
        </li>
        <li>
          <h3>Windows Phone</h3>
        </li>
        <li>
          <h3>iPhone</h3>
        </li>
      </ul>
    </div>
    <div>
    <h1>
        Mobile Manufactures
      </h1>
      <ul>
        <li>
          <h3>Samsung</h3>
        </li>
        <li>
          <h3>HTC</h3>
        </li>
        <li>
          <h3>Micromax</h3>
        </li>
        <li>
          <h3>Apple</h3>
        </li>
      </ul>
    </div>
  </div>

  // const age = 26;
  // return (
  //   <div className="App">
  //     {
  //       [{name:"Kiran",age:26},{name:"Sakshi",age:25}].map((el)=>{
  //        return (
  //          <Userdata name={el.name} age={el.age}/>
  //        )
  //       })
  //     }
  //   </div>
  // );
}

// function Userdata(props){
//   return (           <div>
//     <h1>Hello {props.name} welcome</h1>
//     <h2>your age is {props.age}</h2>
//   </div>)
// }


export default App;
