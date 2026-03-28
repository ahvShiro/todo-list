import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const [taskList, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const taskListStorage = JSON.parse(localStorage.getItem("list-tasks")) || [];
        setList(taskListStorage);
        
        console.log("USE EFFECT RAN")
    }, [])

    const redirectToForm = () => {
        navigate("/form");
    }

    return(

        <div>
            <h1>Lista de tarefas</h1>

            <input type="button" value="new" onClick={redirectToForm}/>
            
            {taskList.length > 0 
                ? taskList.map((obj) => (<p key={obj.id}>{obj.text}</p>)) 
                : "Sem tarefas"}
        </div>
    );
}

export default Home;