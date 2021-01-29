import React, { Fragment, useEffect, useState } from "react";
import "./Style.css";
import EditTODO from "./EditTODO"
const DisplayTODO = () => {
        const [list, setList] = useState([]);
        const getData = async() => {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            console.log(jsonData);
            setList(jsonData);
        };
        useEffect(() => {
            getData();
        }, []);

        const deleteTodo = async(id) => {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            setList(list.filter(item => item.todoid != id));
        }

        return ( 
        <Fragment> 
            <table class = "table" >
                <thead >
                    <tr>
                        <th scope = "col" > Description </th> 
                        <th scope = "col" > Edit </th > 
                        <th scope = "col" > Delete </th>  
                    </tr> 
                </thead>  
                <tbody > {
                    list.map(item => ( 
                        <tr key = { item.todoid }>
                            <th scope = "col" > { item.tododescription } </th> 
                            <th scope = "col" > <EditTODO item = {item} /> </th> 
                            <th scope = "col" > < button class="btn btn-danger" onClick = {() => deleteTodo(item.todoid)}> Delete </button></th>
                        </tr>
                        ))}
                </tbody> 
            </table > 
        </Fragment>);
        };

        export default DisplayTODO;