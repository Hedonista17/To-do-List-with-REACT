import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//include images into your bundle


//create your first component
const Home = () => {
	const[inputValue,setInputValue] = useState("");
	const[tareas,setTareas] = useState([]);
	return (
		<div className="container">
			<h1 className="my-5"> ⭐ To Do List with React ⭐</h1>
			<ul className="list-group mt-5">
				<li> <input onChange = {(element) => setInputValue(element.target.value)} value = {inputValue} onKeyPress= type="text" className="form-control" placeholder="Escriba la tarea por realizar"/></li>
				<li className="list-group-item">A second item  <FontAwesomeIcon icon={ faTrash } /></li>
				<li className="list-group-item">A third item    <FontAwesomeIcon icon={ faTrash } /></li>
				<li className="list-group-item">A fourth item     <FontAwesomeIcon icon={ faTrash } /></li>
				<li className="list-group-item">And a fifth one    <FontAwesomeIcon icon={ faTrash } /></li>
			</ul>
      <div className="mx-3">23 tareas por realizar</div>
		</div>
	);
};

export default Home;
