"use client";

import { AnimatedBackground } from "@/components/ui/animated-background";
import { TextLoop } from "@/components/ui/text-loop";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const THEMES_OPTIONS = [
	{
		label: "Light",
		id: "light",
		icon: <SunIcon className="h-4 w-4" />,
	},
	{
		label: "Dark",
		id: "dark",
		icon: <MoonIcon className="h-4 w-4" />,
	},
	{
		label: "System",
		id: "system",
		icon: <MonitorIcon className="h-4 w-4" />,
	},
];

function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<AnimatedBackground
			className="pointer-events-none rounded-md bg-secondary"
			defaultValue={theme}
			transition={{
				type: "spring",
				bounce: 0,
				duration: 0.2,
			}}
			enableHover={false}
			onValueChange={(id) => {
				setTheme(id as string);
			}}
		>
			{THEMES_OPTIONS.map((theme) => {
				return (
					<button
						key={theme.id}
						className="inline-flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-foreground"
						type="button"
						aria-label={`Switch to ${theme.label} theme`}
						data-id={theme.id}
					>
						{theme.icon}

					</button>
				);
			})}
		</AnimatedBackground>
	);
}
export function Footer() {

	return (
		<footer className="border-t py-3">
			<div className="flex items-center justify-between">
				<a
					href="https://github.com/lucien-loua"
					target="_blank"
					rel="noreferrer"
				>
					<TextLoop className="text-xs text-muted-foreground">
						<span>
							© {new Date().getFullYear()} Lucien Loua.
						</span>
						<span>Web Interface Designer</span>
					</TextLoop>
				</a>
				<div className="flex items-center gap-2 text-xs text-muted-foreground">
					<ThemeSwitch />
				</div>
			</div>
		</footer>
	);
}
