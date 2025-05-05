import { Section } from "@/components/layout/section";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { reader } from "@/lib/reader";
import Link from "next/link";

export async function PostsSection() {
	const posts = await reader().collections.posts.all();
	return (
		<Section>
			<h3 className="mb-3 text-lg font-medium">Posts</h3>
			<div className="flex flex-col space-y-0">
				<AnimatedBackground
					enableHover
					transition={{ type: "spring", bounce: 0, duration: 0.2 }}
				>
					{posts.map((post) => {
						const title = post.entry.title ?? "";
						const description = post.entry.description ?? "";
						const link = `/posts/${post.slug}`;
						return (
							<Link
								key={post.slug}
								className="-mx-3 block rounded-xl px-3 py-3 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
								href={link}
								data-id={post.slug}
							>
								<div className="flex flex-col space-y-1">
									<h4 className="font-normal dark:text-zinc-100">{title}</h4>
									<p className="text-zinc-500 dark:text-zinc-400">
										{description}
									</p>
								</div>
							</Link>
						);
					})}
				</AnimatedBackground>
			</div>
		</Section>
	);
}
