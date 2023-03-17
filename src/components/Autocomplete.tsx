// import axios from "axios";
// import classnames from "classnames";
// // you should import `lodash` as a whole module
// import lodash from "lodash";
// import React from "react";

// const ITEMS_API_URL = "https://api.nationalize.io";
// const DEBOUNCE_DELAY = 500;

// // the exported component can be either a function or a class

// export default function Autocomplete() {
// 	// States
// 	const [loading, setLoading] = React.useState(false);
// 	const [items, setItems] = React.useState([]);

// 	// Handlers
// 	const handleChangeSearch = lodash.debounce(async (event) => {
// 		const value = event.target.value;
// 		try {
// 			const result = await axios.get(ITEMS_API_URL, {
// 				params: {
// 					name: value,
// 				},
// 			});

// 			setItems([result.data]);
// 		} catch (e) {
// 			setItems([]);
// 		} finally {
// 			setLoading(false);
// 		}
// 	}, DEBOUNCE_DELAY);

// 	const handleLoadOptions = (event) => {
// 		setLoading(true);
// 		handleChangeSearch(event);
// 	};

// 	return (
// 		<div className="wrapper">
// 			<div className={classnames("control", { "is-loading": loading })}>
// 				<input type="text" className="input" onChange={handleLoadOptions} />
// 			</div>
// 			<div className="list">
// 				{loading && <div>loading..</div>}
// 				{!loading &&
// 					items.map((item) => (
// 						<a key={item} className="list-item" onClick={() => alert(item.name)}>
// 							{item.name}
// 						</a>
// 					))}
// 			</div>
// 		</div>
// 	);
// }
