'use client'

import Image from "next/image";
import Transition from "@/components/transition";
import KeyFrame from "@/components/keyframe";
import {Variant} from "@/components/variants";
import Gesture from "@/components/gesture";
import Drag from "@/components/drag";
import MotionValues from "@/components/motion-values";
import ScrollTriggered from "@/components/scroll-triggered";
import ScrollLinked from "@/components/scroll-linked";

export default function Home() {
	return (
		<main className="">
			{/* <Transition/> */}
			{/* <KeyFrame/> */}
			{/* <Variant/> */}
			{/* <Gesture/> */}
			{/* <Drag/> */}
      {/* <MotionValues /> */}
      {/* <ScrollTriggered/> */}
      <ScrollLinked/>
		</main>
	);
}
