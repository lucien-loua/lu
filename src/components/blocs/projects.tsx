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
				<MorphingDialogContent className="relative aspect-video rounded-2xl bg-card/25 p-1 ring-1 ring-ring/50 ring-inset">
					<video
						src={src}
						autoPlay
						loop
						muted
						className="aspect-video h-max w-full rounded-xl md:h-[70vh]"
					/>
				</MorphingDialogContent>
				<MorphingDialogClose
					className="fixed top-6 right-6 h-fit w-fit rounded-full bg-card/25 p-1"
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: { delay: 0.3, duration: 0.1 },
						},
						exit: { opacity: 0, transition: { duration: 0 } },
					}}
				>
					<XIcon className="h-5 w-5 text-muted-foreground" />
				</MorphingDialogClose>
			</MorphingDialogContainer>
		</MorphingDialog>
	);
}
export async function ProjectsSection() {
	const projects = await reader().collections.projects.all();
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
						<div key={project.slug} className="space-y-3">
							<div className="relative rounded-2xl bg-card/25 p-1 ring-1 ring-ring/50 ring-inset">
								<ProjectVideo src={video} />
							</div>
							<div className="px-1">
								<a
									className="font-base group relative inline-block"
									href={link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{name}
									<span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-foreground transition-all duration-200 group-hover:max-w-full" />
								</a>
								<p className="text-base text-muted-foreground">
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
