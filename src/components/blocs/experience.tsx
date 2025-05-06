import { Spotlight } from "@/components/ui/spotlight";
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
							className="relative overflow-hidden rounded-2xl bg-card/50 p-[5px]"
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							key={experience.slug}
						>
							<Spotlight
								className="from-primary via-primary/80 to-primary/60 blur-2xl"
								size={64}
							/>
							<div className="relative h-full w-full rounded-[15px] bg-card p-4">
								<div className="relative flex w-full flex-row justify-between">
									<div>
										<h4 className="font-normal">{title}</h4>
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
