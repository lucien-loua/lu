"use client";

import { motion } from "motion/react";

const VARIANTS_SECTION = {
	hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
	visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};
const TRANSITION_SECTION = {
	duration: 0.3,
};

export function Section({ children }: { children: React.ReactNode }) {
	return (
		<motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
			{children}
		</motion.section>
	);
}
