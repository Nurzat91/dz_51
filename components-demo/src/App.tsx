import Task from "./Task/Task";
import './App.css'
import {useState} from "react";

interface Task {
    numbers: number;
}

function App() {
    const [num, setnum] = useState<Task[]>([
        {numbers: 5},
        {numbers: 11},
        {numbers: 16},
        {numbers: 23},
        {numbers: 32},
    ]);


    const changeName = () =>{
        setnum([
            {numbers: 7},
            {numbers: 11},
            {numbers: 11},
            {numbers: 11},
            {numbers: 11},
        ]);
    };


    return (
    <div className="App">
        <div>
            <button onClick={changeName}>New numbers</button>
        </div>

        <Task numbers={num[0].numbers}/>
        <Task numbers={num[1].numbers}/>
        <Task numbers={num[2].numbers}/>
        <Task numbers={num[3].numbers}/>
        <Task numbers={num[4].numbers}/>
    </div>
  )
}

export default App
