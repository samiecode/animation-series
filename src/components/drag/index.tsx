'use client'

import { useState } from "react";
import { Refresh } from "./refresh";
import { Example } from "./example";
import "./styles.css";

export default function Drag() {
	const [count, setCount] = useState(0);
	return (
		<>
			<Refresh onClick={() => setCount(count + 1)} />
			<div className="example-container">
				<Example key={count} />
			</div>
		</>
	);
}
