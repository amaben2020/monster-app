import React from "react";

const Monster = ({ users }) => {
	return (
		<div className="card-container">
			{" "}
			<img src="https://robohash.org/162.158.63.66.png/?set=set3" />
			<h2>{users.name}</h2>
			<h2>{users.email}</h2>
			<h2>{users.username}</h2>
		</div>
	);
};

export default Monster;
