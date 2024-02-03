import './App.css';
import {useState} from "react";

const Calculator = (props) =>{
  const [display,setDisplay] = useState("0");
  const [status,setStatus] = useState("");
  
  const displayString = (event) =>{
    if(display.length <=13){
    setDisplay((prevDisplay) => prevDisplay === "0" ?   event.target.value : prevDisplay + event.target.value)
    } else{
      setDisplay("MATH ERROR");
      setTimeout(clearDisplay, 300);
    };
    if(event.target.value == "."){
      setStatus("disabled")
    }else if(event.target.value == "+" || event.target.value == "-" || event.target.value == "/" || event.target.value == "*"){
      setStatus('')
    }
  };
  
  const clearDisplay = () =>{
    setDisplay("0")
    setStatus("")
  };
  
  function mathsOperation() {
    let filter = display.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('');
    let finalString = eval(filter);
    setDisplay(finalString);
  }
  
  
  return(
<body class="d-flex p-2 flex-column justify-content-center align-items-center">
  <div className="container">
    <div className="screen" id="display"><p className="screen-text">{display}</p></div>
    <div className="row">
      <button id="clear" className="button grey" onClick={clearDisplay}>AC</button>
      <button id="plusminus" className="button grey">+/-</button>
      <button id="percentage" className="button grey" value="%">%</button>
      <button id="divide" className="button yellow" value="/" onClick={displayString}>÷</button>
    </div>
    <div className="row">
      <button id="seven" className="button dark-grey" onClick={displayString} value="7">7</button>
      <button id="eight" className="button dark-grey" value="8" onClick={displayString}>8</button>
      <button id="nine" className="button dark-grey" value="9" onClick={displayString}>9</button>
      <button id="multiply" className="button yellow" value="*" onClick={displayString}>x</button>
    </div>
     <div className="row">
      <button id="four" className="button dark-grey" value="4" onClick={displayString}>4</button>
      <button id="five" className="button dark-grey" value="5" onClick={displayString}>5</button>
      <button id="six" className="button dark-grey" value="6" onClick={displayString}>6</button>
      <button id="subtract" className="button yellow" value="-" onClick={displayString}>-</button>
    </div>
     <div className="row">
      <button id="one" className="button dark-grey" value="1" onClick={displayString}>1</button>
      <button id="two" className="button dark-grey" value="2" onClick={displayString}>2</button>
      <button id="three" className="button dark-grey" value="3" onClick={displayString}>3</button>
      <button id="add" className="button yellow" value="+" onClick={displayString}>+</button>
    </div>
    <div className="row">
      <button id="zero" className="button dark-grey" value="0" onClick={displayString}>0</button>
      <button id="decimal" className="button dark-grey" value="." onClick={displayString} disabled={status}>.</button>
      <button id="equals" className="button yellow" onClick={mathsOperation}>=</button>
    </div>
  </div>
</body>
)
}

export default Calculator;
