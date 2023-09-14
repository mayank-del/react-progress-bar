import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [data, setData] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      setData((val) => val + 1);
    }, 60);
    setTimeout(function () {
      clearInterval(myInterval);
    }, 3000);
  }, []);
  return (
    <div className="App">
      <div className="progress-bar">
        <span style={{color:data>50?"white":"black"}}>

        {data}%

        </span>
        <div style={{"background":"#37c7ec",width:`${data}%`}}/>
      </div>
    </div>
  );
}
