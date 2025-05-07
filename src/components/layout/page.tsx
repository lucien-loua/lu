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

interface PageLayoutProps extends React.ComponentProps<typeof motion.main> { }

export function PageLayout({ children, ...props }: PageLayoutProps) {
	return (
		<motion.main
			className="space-y-14 py-12"
			variants={VARIANTS_CONTAINER}
			initial="hidden"
			animate="visible"
			{...props}
		>
			{children}
		</motion.main>
	);
}
