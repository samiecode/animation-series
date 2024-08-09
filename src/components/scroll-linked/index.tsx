import "./styles.css";
import {LoremIpsum} from "./lorem-ipsum";
import { motion, useScroll, useSpring } from "framer-motion";
import { Footer } from "./footer";

export default function ScrollLinked() {
	const {scrollYProgress} = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<>
			<motion.div className="progress-bar" style={{scaleX}} />
			<h1>
				<code>useScroll</code> with spring smoothing
			</h1>
			<LoremIpsum />
			<Footer title="useScroll with spring smoothing" />
		</>
	);
}
