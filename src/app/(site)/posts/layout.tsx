import { CopyButton } from "@/components/ui/copy-button";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function LayoutBlogPost({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<canvas className="pointer-events-none fixed left-0 top-0 z-10 h-16 w-full bg-background to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]" />
			<ScrollProgress
				className="fixed top-0 z-20 bg-chart-4"
				springOptions={{
					bounce: 0,
				}}
			/>
			<div className="absolute right-4 top-24">
				<CopyButton />
			</div>
			{children}
		</>
	);
}
