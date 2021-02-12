import React from "react";

const Search = ({ change }) => {
	return (
		<div className="search">
			<input type="search" onChange={change} />
		</div>
	);
};

export default Search;
