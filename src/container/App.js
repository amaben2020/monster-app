import React, { useState } from "react";

import Monsters from "./../components/Monsters";

const App = () => {
	const [search, setMonster] = useState("");

	return (
		<div>
			<Monsters />
		</div>
	);
};

export default App;
