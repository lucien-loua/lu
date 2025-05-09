import { Section } from "@/components/layout/section";
import { reader } from "@/lib/reader";

export async function ProjectsSection() {
	const projects = await reader().collections.projects.all();
	return (
		<Section>
			<h3 className="mb-5 text-lg font-medium">Projects</h3>
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{projects.map((project) => {
					const name = project.entry.name ?? "";
					const description = project.entry.description ?? "";
					const link = project.entry.link ?? "";
					const video = project.entry.video ?? "";
					return (
						<a
							key={project.slug}
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="space-y-1"
						>
							<div className="relative rounded-2xl bg-card p-0.5 ring-1 ring-border ring-inset">
								<video
									src={video}
									className="aspect-video rounded-xl"
									autoPlay
									loop
									muted
									preload="auto"
									playsInline
								/>
							</div>
							<dl className="space-y-1 px-1">
								<dt className="text-base font-medium">{name}</dt>
								<dd className="text-base text-muted-foreground">
									{description}
								</dd>
							</dl>
						</a>
					);
				})}
			</div>
		</Section>
	);
}
