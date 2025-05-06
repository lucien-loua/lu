import { reader } from "@/lib/reader";
import { Section } from "@/components/layout/section";

export async function ExperienceSection() {
	const experiences = await reader().collections.experience.all();
	return (
		<Section>
			<h3 className="mb-3 text-lg font-medium">Experiences</h3>
			<div className="flex flex-col space-y-2">
				{experiences.map((experience) => {
					const company = experience.entry.company ?? "";
					const title = experience.entry.title ?? "";
					const link = experience.entry.link ?? "";
					const start = experience.entry.start ?? "";
					const end = experience.entry.end ?? "";

					return (
						<a
							className="rounded-2xl bg-card border"
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							key={experience.slug}
						>
							<div className="relative h-full w-full p-3">
								<div className="flex flex-row justify-between">
									<div>
										<h4>{title}</h4>
										<p className="text-muted-foreground">{company}</p>
									</div>
									<p className="text-muted-foreground">
										{start} - {end}
									</p>
								</div>
							</div>
						</a>
					);
				})}
			</div>
		</Section>
	);
}
