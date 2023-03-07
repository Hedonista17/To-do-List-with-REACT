import React, { useEffect, useState } from "react";
import { container } from "webpack";


//include images into your bundle


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState();
	const [tareas, setTareas] = useState([]);
	const [realizadas, setRealizadas] = useState([]);

	useEffect(() => {
		console.log(realizadas)
	}, [realizadas])
	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<h1 className="my-5"> ⭐ To Do List with React ⭐</h1>
					<ul className="list-group">
						<li className="list-group-item col-6">

							<input placeholder="Escriba tarea a realizar" id="input"
								type="text"
								onChange={(e) => setInputValue(e.target.value)}
								value={inputValue}
								onKeyDown={(e) => {
									if (e.key === "Enter" && document.getElementById("input").value !== "") {
										setTareas(tareas.concat(inputValue))
										setInputValue(" ")
									}
								}}
								
							></input>
						</li>
						{tareas.map((tarea, index) => (
							<li className="list-group-item">
								{tarea}

								<i class="fa-solid fa-check-to-slot fa-xl mx-4"
									onClick={() => {

										setRealizadas(realizadas.concat(tarea))
										setTareas(tareas.filter((tarea, indiceActual) => index != indiceActual)
										)
									}}
								></i>
								<i
									className="fa-regular fa-trash-can fa-xl"
									onClick={() =>
										setTareas(
											tareas.filter((tarea, indiceActual) => index != indiceActual)
										)
									} ></i>
							</li>
						))}
					</ul>

					<div className="mx-3" id="contador"> {tareas.length == 1 ? tareas.length + " tarea por realizar 😫" : tareas.length + " tareas por realizar 😫"} </div>
				</div>
				<div className="col-6">
					{realizadas.map((realizada) => {
						return (
							
							<ul className="list-group">
							
							</ul>
						)

					}
					)}
				</div>
			</div>
		</div>

	);
};

export default Home;

