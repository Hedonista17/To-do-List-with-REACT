import React, { useState } from "react";


//include images into your bundle


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [tareas, setTareas] = useState([]);
	return (
		<div className="container">
			<h1 className="my-5"> ⭐ To Do List with React ⭐</h1>
			<ul className="list-group">
				<li className="list-group-item">

					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)} 
						value={inputValue} 
						onKeyPress={(e) => {if(e.key === "Enter"){
							setTareas(tareas.concat(inputValue))
						}}}
						placeholder="Escriba tarea a realizar"
					></input>
				</li>
				{tareas.map((tarea, index) => ( //recorre el array de tareas para pintar cada una dentro de un li
		               
					<li className="list-group-item ">
						{tarea}
						<div className="text-end mx-0">
						<i
							className="fa-regular fa-trash-can fa-xl" 
							onClick={() =>
								setTareas(
									tareas.filter((tarea, indiceActual) => index != indiceActual)
								)
							} 

						></i>
						</div>
					</li>
					
				))}
			</ul>

			<div className="mx-3" id="contador"> {tareas.length}  tareas por realizar 😫</div>
		</div>
	);
};

export default Home;

