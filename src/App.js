import react,{useState} from 'react';
import './App.css';
import  DisplayBarChart  from './DisplayBarChart';

function App() {
  //var data=[{text:"a",value:5},{text:"b",value:3},{text:"c",value:0}];
  // var data=new Map([{'a':5},{'b':3},{'c':0}]);
  var [data1,setData]=useState([{text:"a",value:5},{text:"b",value:3},{text:"c",value:0}]);
  const [show,setShow]=useState(false);
  function increment(){
    data1[0].value++;
    data1[1].value++;
    data1[2].value++;
  }
  function decrement(){
    data1[0].value--;
    data1[1].value--;
    data1[2].value--;
    console.log(data1[0].value);
  }


  return (
    <div>
      <DisplayBarChart d={data1}></DisplayBarChart>

      <div>
        <h1><input type="button" value="Increment" onClick={increment}></input><br></br>
        <input type="button" value="Decrement" onClick={decrement}></input></h1>
        <input type="button" value="Show Chart" onClick={()=>setShow(true)}></input>  
      </div>
      {/* <div>{show?<DisplayBarChart d={data1}></DisplayBarChart>:null}</div> */}
      
    </div>
  );
}

export default App;
