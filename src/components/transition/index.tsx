'use client'

import { motion } from "framer-motion";
import "../keyframe/styles.css"

export default function Transition() {
  return (
		<motion.div
			className="box"
			initial={{opacity: 0, scale: 0.5}}
			animate={{opacity: 1, scale: 1}}
			transition={{duration: 3}}
		/>
  );
}
