import {
	MorphingDialog,
	MorphingDialogClose,
	MorphingDialogContainer,
	MorphingDialogContent,
	MorphingDialogTrigger,
} from "@/components/ui/morphing-dialog";
import { XIcon } from "lucide-react";
import { Section } from "@/components/layout/section";
import { reader } from "@/lib/reader";

type ProjectVideoProps = {
	src: string;
};

function ProjectVideo({ src }: ProjectVideoProps) {
	return (
		<MorphingDialog
			transition={{
				type: "spring",
				bounce: 0,
				duration: 0.3,
			}}
		>
			<MorphingDialogTrigger>
				<video
					src={src}
					autoPlay
					loop
					muted
					className="aspect-video w-full cursor-zoom-in rounded-xl"
				/>
			</MorphingDialogTrigger>
			<MorphingDialogContainer>
				<MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
					<video
						src={src}
						autoPlay
						loop
						muted
						className="aspect-video h-max w-full rounded-xl md:h-[70vh]"
					/>
				</MorphingDialogContent>
				<MorphingDialogClose
					className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: { delay: 0.3, duration: 0.1 },
						},
						exit: { opacity: 0, transition: { duration: 0 } },
					}}
				>
					<XIcon className="h-5 w-5 text-zinc-500" />
				</MorphingDialogClose>
			</MorphingDialogContainer>
		</MorphingDialog>
	);
}
export async function ProjectsSection() {
	const projects = await reader.collections.projects.all();
	return (
		<Section>
			<h3 className="mb-5 text-lg font-medium">Projects</h3>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{projects.map((project) => {
					const name = project.entry.name ?? "";
					const description = project.entry.description ?? "";
					const link = project.entry.link ?? "";
					const video = project.entry.video ?? "";
					return (
						<div key={project.slug} className="space-y-2">
							<div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
								<ProjectVideo src={video} />
							</div>
							<div className="px-1">
								<a
									className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
									href={link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{name}
									<span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50" />
								</a>
								<p className="text-base text-zinc-600 dark:text-zinc-400">
									{description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</Section>
	);
}
