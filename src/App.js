
import './App.css';
import Image from "./wp2506833.jpg"

function App() {
  var x=10;
var text="hello karthik";
if(x===10){
  text= "karthik is a good boy";
}
  return (
    <div className="App">
        <h1>Hello wolrd</h1> <p>chinthan  is  good  boy </p>   
        <p> this paragraph</p>
        <h3>{5+50}</h3>
        <img src={Image} alt="pic" width="800px"/>
        <h2>{text}</h2>
        <h2>{x>10?"true":"false"}</h2>
    </div>
  );
}

export default App;
