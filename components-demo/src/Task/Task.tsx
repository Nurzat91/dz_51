import React from "react";

interface Props{
    numbers: number
}
const Task:React.FC<Props> = ({numbers}) =>{
    return(
        <div className="task">
            <span>{numbers}</span>
        </div>
    )
};

export default Task;