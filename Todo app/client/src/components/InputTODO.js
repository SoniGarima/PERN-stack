import React, { Fragment, useState } from "react";
import "./Style.css";
const InputTODO = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            console.log("dhgdge");
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return ( <Fragment>
        <h1 class="m-5" > Todo List </h1> 
        <div class="m-5">
        <form  className = "d-flex mt-5" onSubmit = { onSubmitForm } >
        <input type = "text"
        className = "form-control"
        value = { description }
        onChange = { e => setDescription(e.target.value) }
        />
        <button className = "btn btn-success" > Add </button> </form ></div> </Fragment>
    );
};

export default InputTODO;