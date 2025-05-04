"use client";

import {
	type SpringOptions,
	motion,
	useMotionValue,
	useSpring,
} from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

const SPRING_CONFIG = { stiffness: 26.7, damping: 4.1, mass: 0.2 };

export type MagneticProps = {
	children: React.ReactNode;
	intensity?: number;
	range?: number;
	actionArea?: "self" | "parent" | "global";
	springOptions?: SpringOptions;
};

export function Magnetic({
	children,
	intensity = 0.6,
	range = 100,
	actionArea = "self",
	springOptions = SPRING_CONFIG,
}: MagneticProps) {
	const [isHovered, setIsHovered] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const x = useRef(useMotionValue(0));
	const y = useRef(useMotionValue(0));

	const springX = useSpring(x.current, springOptions);
	const springY = useSpring(y.current, springOptions);

	useEffect(() => {
		const calculateDistance = (e: MouseEvent) => {
			if (ref.current) {
				const rect = ref.current.getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;
				const distanceX = e.clientX - centerX;
				const distanceY = e.clientY - centerY;

				const absoluteDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

				if (isHovered && absoluteDistance <= range) {
					const scale = 1 - absoluteDistance / range;
					x.current.set(distanceX * intensity * scale);
					y.current.set(distanceY * intensity * scale);
				} else {
					x.current.set(0);
					y.current.set(0);
				}
			}
		};

		document.addEventListener("mousemove", calculateDistance);

		return () => {
			document.removeEventListener("mousemove", calculateDistance);
		};
	}, [isHovered, intensity, range]);

	useEffect(() => {
		if (actionArea === "parent" && ref.current?.parentElement) {
			const parent = ref.current.parentElement;

			const handleParentEnter = () => setIsHovered(true);
			const handleParentLeave = () => setIsHovered(false);

			parent.addEventListener("mouseenter", handleParentEnter);
			parent.addEventListener("mouseleave", handleParentLeave);

			return () => {
				parent.removeEventListener("mouseenter", handleParentEnter);
				parent.removeEventListener("mouseleave", handleParentLeave);
			};
		}
		if (actionArea === "global") {
			setIsHovered(true);
		}
	}, [actionArea]);

	const handleMouseEnter = () => {
		if (actionArea === "self") {
			setIsHovered(true);
		}
	};

	const handleMouseLeave = () => {
		if (actionArea === "self") {
			setIsHovered(false);
			x.current.set(0);
			y.current.set(0);
		}
	};

	return (
		<motion.div
			ref={ref}
			onMouseEnter={actionArea === "self" ? handleMouseEnter : undefined}
			onMouseLeave={actionArea === "self" ? handleMouseLeave : undefined}
			style={{
				x: springX,
				y: springY,
			}}
		>
			{children}
		</motion.div>
	);
}
