import Image from "next/image";
import {motion} from "framer-motion";
import Transition from "@/components/transition";
import KeyFrame from "@/components/keyframe";

export default function Home() {
  return (
		<main className="min-h-screen w-full flex justify-center items-center">
      {/* <Transition/> */}
      <KeyFrame/>
		</main>
  );
}
