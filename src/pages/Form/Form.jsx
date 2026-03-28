import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    
    const [description, setDescription] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        console.log(description)
    }, [description])

    const changeDescription = (e) => {
        setDescription(e.target.value);
        console.log(description);
    }

    const save = () => {
        const task = {
            id: Date.now(),
            description: description,
            status: false
        };

        let list = JSON.parse(localStorage.getItem("list-tasks"));

        list.push(task);
        localStorage.setItem("list-tasks", JSON.stringify(list));

        navigate("/");
    }

    return(
        <div>
            <input type="text" value={description} onChange={changeDescription}/>
            <input type="button" value="Salvar" onClick={save}/>
        </div>
    )

}

export default Form