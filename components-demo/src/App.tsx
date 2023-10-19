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

    function getRandomNumbers(min: number, max: number, count: number): number[] {
        if (max - min + 1 < count) {
            throw new Error('Error' +  Error);
        }

        const numbers: number[] = [];

        while (numbers.length < count) {
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!numbers.includes(randomNum)) {
                numbers.push(randomNum);
            }
        }

        return numbers.sort((a, b) => a - b);
    }

    const minNum = 5;
    const maxNum = 36;
    const count = 5;

    const randomNumbers = getRandomNumbers(minNum, maxNum, count);

    const changeName = () =>{
        setnum([
            {numbers: randomNumbers[0]},
            {numbers: randomNumbers[1]},
            {numbers: randomNumbers[2]},
            {numbers: randomNumbers[3]},
            {numbers: randomNumbers[4]},
        ]);
    };

    return (
    <div className="App">
        <div>
            <button onClick={changeName}>New numbers</button>
        </div>

        <div className="TaskBlock">
            <Task numbers={num[0].numbers}/>
            <Task numbers={num[1].numbers}/>
            <Task numbers={num[2].numbers}/>
            <Task numbers={num[3].numbers}/>
            <Task numbers={num[4].numbers}/>
        </div>
    </div>
  )
}

export default App
