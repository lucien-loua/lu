import { CopyButton } from "@/components/ui/copy-button";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function LayoutBlogPost({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<canvas className="pointer-events-none fixed left-0 top-0 z-10 h-10 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
			<ScrollProgress
				className="fixed top-0 z-20 bg-gray-300 dark:bg-zinc-600"
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
