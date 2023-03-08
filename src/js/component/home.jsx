import React, { useEffect, useState } from "react";


const fecha = new Date()
//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [tareas, setTareas] = useState([]);
	const [realizadas, setRealizadas] = useState([]);
	
	

	useEffect(() => {
		console.log(realizadas)
	}, [realizadas])

	
	return (
		<div className="container">
			<div className="row">
				<h1 className="my-5"> ⭐ To Do List with React ⭐</h1>
				<div className="col-6">
					<ul className="list-group">
						<li className="list-group-item col-6">

							<input placeholder="Escriba tarea a realizar" id="input"
								type="text"
								onChange={(e) => setInputValue(e.target.value)}
								value={inputValue}
								onKeyDown={(e) => {
									if (e.key === "Enter" && inputValue.length >= 2) {
										setTareas(tareas.concat(inputValue))
										setInputValue(" ")
									}
								}}

						></input>
						</li>
						{tareas.map((tarea, index) => (
							<li className="list-group-item">
								{tarea}
                                 
								<i class="fa-solid fa-check-to-slot fa-xl mx-4 mt-1 "
									onClick={() => {
										setRealizadas(realizadas.concat(tarea))
										setTareas(
											tareas.filter((tarea, indiceActual) => index != indiceActual)
										)
                                              
									}}
								></i>
								<i
									className="fa-regular fa-trash-can fa-xl mt-1"
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
					<h2> Tareas Realizadas ✔️</h2>
					{realizadas.map((realizada, index) => {
						return (
							<>

								<ul className="list-group">

									<li className="list-group-item ">
										
										{realizada}  {fecha.toLocaleDateString()} {fecha.toLocaleTimeString()}
										<i
											className="fa-regular fa-trash-can fa-xl mx-4  mt-1"
											onClick={() =>
												setRealizadas(
													realizadas.filter((realizada, indiceActual) => index != indiceActual)
												)
											} ></i>
										
										
									</li>
								</ul>
							</>
						)

					}
					)}
					<div className="mx-3" id="contador"> {realizadas.length == 1 ? realizadas.length + " tarea realizada 😊" : realizadas.length + " tareas realizadas 😊"} </div>
				</div>
			</div>
		</div>  

	);
};

export default Home;

