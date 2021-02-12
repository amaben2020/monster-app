import React, { useState, useEffect } from "react";
import axios from "axios";
import Monster from "./Monster";
import Search from "../components/Search";
const Monsters = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/users"
				);
				setData(response.data);
				console.log(response.data);
				console.log(data);
			} catch (error) {
				console.log("error");
			}
		}
		fetchData();
	}, []);

	const change = (e) => {
		const filteredData = data.filter(
			(monster) => monster.name.toLowerCase().indexOf(e.target.value) > -1
		);
		setData(filteredData);
	};

	return (
		<div>
			<Search change={change} />
			{data.map((data) => (
				<div style={{ margin: "5%" }}>
					<Monster key={data.id} users={data} />
				</div>
			))}
		</div>
	);
};
export default Monsters;
