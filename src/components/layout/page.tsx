"use client";

import { motion } from "motion/react";
const VARIANTS_CONTAINER = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

export function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<motion.main
			className="space-y-20"
			variants={VARIANTS_CONTAINER}
			initial="hidden"
			animate="visible"
		>
			{children}
		</motion.main>
	);
}
