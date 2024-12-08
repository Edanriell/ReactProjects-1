import "./List.css";

function List({ items }) {
	return (
		<ul className="App-list">
			{items.map((item) => (
				<li className="mb-1" key={item.field}>
					<span>{item.field}: </span>
					{item.value}
				</li>
			))}
		</ul>
	);
}

export default List;
