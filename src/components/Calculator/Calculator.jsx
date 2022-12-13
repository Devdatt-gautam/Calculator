import React from "react";
import "../Calculator/calculator.css";
import Output from "./Output"
import Key from "./Key"
import { useState } from "react";
const Calculator = () => {
    const [input,setInput]=useState("");
    const [result,setResult]=useState(0)
    return (<div className="calculator">
    <Output input={input} result={result}  />
    <div className="key-container">
          <Key value="C" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="AC" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="=" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="+" input={input} setInput={setInput} result={result} setResult={setResult}/>
      <Key value="1" input={input} setInput={setInput} result={result} setResult={setResult} />
    <Key value="2" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="3" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="-" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="4" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="5" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="6" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="*" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="7" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="8" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="9" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="/" input={input} setInput={setInput} result={result} setResult={setResult}/>
    <Key value="0" input={input} setInput={setInput} result={result} setResult={setResult}/>
    </div>
  </div>);
};

export default Calculator;
